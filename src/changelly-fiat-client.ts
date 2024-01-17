import * as crypto from "crypto";
import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  HttpStatusCode,
} from "axios";

import {
  ChangellyBadRequestException,
  ChangellyBaseException,
  ChangellyInternalServerErrorException,
  ChangellyTooManyReequestsException,
  ChangellyUnauthorizedException,
} from "./exceptions";

import {
  ChangellyBuildSignatureParams,
  ChangellyFiatClientParams,
  ChangellyCreateOrderParams,
  ChangellyCreateOrderResponse,
  ChangellyGetCountryAvailabilityParams,
  ChangellyGetCountryAvailabilityResponse,
  ChangellyGetCurrencyListParams,
  ChangellyGetCurrencyListResponse,
  ChangellyGetOffersParams,
  ChangellyGetOffersResponse,
  ChangellyGetProviderListResponse,
  ChangellyValidateWalletAddressParams,
  ChangellyValidateWalletAddressResponse,
} from "./types";

import { ChangellyRequestUrl } from "./enums";

export class ChangellyFiatClient {
  private readonly baseUrl: string;
  private readonly publicKey: string;
  private readonly privateKey: string;
  private readonly callbackPublicKey?: string;

  constructor(params: ChangellyFiatClientParams) {
    this.baseUrl = params.baseUrl || "https://fiat-api.changelly.com";
    this.publicKey = params.publicKey;
    this.privateKey = params.privateKey;
    this.callbackPublicKey = params.callbackPublicKey;
  }

  /**
   * Build X-Api-Signature.
   *
   * @param params Signature params to build
   */
  public buildSignature(params: ChangellyBuildSignatureParams): string {
    const { params: queryParams, data, pathname, baseUrl } = params;

    if (data && typeof data !== "object") {
      throw new Error(
        "Invalid params data type. This should be an object. For more information, see https://fiat-api.changelly.com/docs/#tag/Integration-guide/Manual-of-sending-a-request"
      );
    }

    let privateKeyObject: crypto.KeyObject;

    try {
      privateKeyObject = crypto.createPrivateKey({
        key: this.privateKey,
        type: "pkcs1",
        format: "pem",
        encoding: "base64",
      });
    } catch (err) {
      throw new Error("Invalid private key");
    }

    const signatureUrl = new URL(pathname, baseUrl || this.baseUrl);

    if (queryParams) {
      const searchParams = new URLSearchParams({ ...queryParams });

      signatureUrl.search = searchParams.toString();
    }

    const signatureUrlString = signatureUrl.toString();
    const message = data || {};
    const payload = signatureUrlString + JSON.stringify(message);

    const signature = crypto
      .sign("sha256", Buffer.from(payload), privateKeyObject)
      .toString("base64");

    return signature;
  }

  /**
   * Validate X-Callback-Signature.
   *
   * @param signature The serialized string signed by Changelly private key according to the RSA-SHA256 method.
   * @param payload The serialized the generated object in JSON format.
   */
  private validateCallbackSignature(
    signature: string,
    payload: string
  ): boolean {
    if (!this.callbackPublicKey) {
      throw new Error("Callback public key is required");
    }

    let publicKeyObject: crypto.KeyObject;

    try {
      publicKeyObject = crypto.createPublicKey({
        key: this.callbackPublicKey,
        type: "pkcs1",
        format: "pem",
        encoding: "base64",
      });
    } catch (err) {
      throw new Error("Invalid callback public key");
    }

    const payloadBuffer = Buffer.from(payload);
    const signatureBuffer = Buffer.from(signature, "base64");

    return crypto.verify(
      "sha256",
      payloadBuffer,
      publicKeyObject,
      signatureBuffer
    );
  }

  /**
   * Validate order X-Callback-Signature.
   *
   * @param signature The serialized string with an orderId signed by Changelly private key according to the RSA-SHA256 method.
   * @param orderId Changelly order identifier.
   */
  public validateOrderCallbackSignature(
    signature: string,
    orderId: string
  ): boolean {
    if (!orderId) {
      throw new Error('Order ID is requried')
    }
    
    const payload = JSON.stringify({ orderId });

    return this.validateCallbackSignature(signature, payload);
  }

  /**
   * Request method.
   *
   * @param pathname Request address.
   * @param config Axios request config.
   */
  private async request<T, D = Record<string, never>>(
    pathname: string,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T, D>> {
    const headers = config.headers || {};
    const signature = this.buildSignature({ pathname, ...config });

    return axios<T>({
      baseURL: this.baseUrl,
      url: pathname,
      timeout: 12000,
      ...config,
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": this.publicKey,
        "X-Api-Signature": signature,
        ...headers,
      },
    }).catch((err: Error | AxiosError<any, D>) => {
      if (axios.isAxiosError(err)) {
        switch (err.response?.status) {
          case HttpStatusCode.BadRequest:
            throw new ChangellyBadRequestException<D>(err);
          case HttpStatusCode.Unauthorized:
            throw new ChangellyUnauthorizedException<D>(err);
          case HttpStatusCode.TooManyRequests:
            throw new ChangellyTooManyReequestsException<D>(err);
          case HttpStatusCode.InternalServerError:
            throw new ChangellyInternalServerErrorException<D>(err);
          default:
            throw new ChangellyBaseException<T, D>(err);
        }
      }

      throw err;
    });
  }

  /**
   * Get extended information about On-Ramp providers to users.
   *
   * @param config Axios request config.
   */
  public async getProviderList(
    config: AxiosRequestConfig = {}
  ): Promise<ChangellyGetProviderListResponse[]> {
    const response = await this.request<ChangellyGetProviderListResponse[]>(
      ChangellyRequestUrl.ProvderList,
      config
    );

    return response.data;
  }

  /**
   * Get list of supported cryptos and fiat currencies.
   *
   * @param params Currency list params to get.
   * @param config Axios request config.
   */
  public async getCurrencyList(
    params?: ChangellyGetCurrencyListParams,
    config: AxiosRequestConfig = {}
  ): Promise<ChangellyGetCurrencyListResponse[]> {
    const response = await this.request<ChangellyGetCurrencyListResponse[]>(
      ChangellyRequestUrl.CurrencyList,
      { params, ...config }
    );

    return response.data;
  }

  /**
   * Get list of countries where crypto purchases are supported.
   *
   * @param params Country availability params to get.
   * @param config Axios request config.
   */
  public async getCountryAvailabilityList(
    params?: ChangellyGetCountryAvailabilityParams,
    config: AxiosRequestConfig = {}
  ): Promise<ChangellyGetCountryAvailabilityResponse[]> {
    const response = await this.request<
      ChangellyGetCountryAvailabilityResponse[]
    >(ChangellyRequestUrl.CountryAvailability, { params, ...config });

    return response.data;
  }

  /**
   * Get list of purchase offers from On-Ramp providers.
   *
   * @param params Offers params to get.
   * @param config Axios request config.
   */
  public async getOffers(
    params: ChangellyGetOffersParams,
    config: AxiosRequestConfig = {}
  ): Promise<ChangellyGetOffersResponse[]> {
    const response = await this.request<ChangellyGetOffersResponse[]>(
      ChangellyRequestUrl.GetOffers,
      { params, ...config }
    );

    return response.data;
  }

  /**
   * Create a crypto purchase order and get a redirect URL to the purchase page.
   * If any of the optional parameters are not provided in the request, they will be returned with the "null" value in the response.
   *
   * @param data Order data to create.
   * @param config Axios request config.
   */
  public async createOrder(
    data: ChangellyCreateOrderParams,
    config: AxiosRequestConfig = {}
  ): Promise<ChangellyCreateOrderResponse> {
    const response = await this.request<ChangellyCreateOrderResponse>(
      ChangellyRequestUrl.CreateOrder,
      { method: "POST", data, ...config }
    );

    return response.data;
  }

  /**
   * Check if the given wallet address and (optional) extra ID are valid for the given currency.
   *
   * @param data Wallet address data to validate.
   * @param config Axios request config.
   */
  public async validateWalletAddress(
    data: ChangellyValidateWalletAddressParams,
    config: AxiosRequestConfig = {}
  ): Promise<ChangellyValidateWalletAddressResponse> {
    const response = await this.request<ChangellyValidateWalletAddressResponse>(
      ChangellyRequestUrl.ValidateWalletAddress,
      { method: "POST", data, ...config }
    );

    return response.data;
  }
}
