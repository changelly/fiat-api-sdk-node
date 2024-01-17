import { ChangellyRequestUrl } from "../enums";

import { ChangellyCreateOrderParams } from "./changelly-create-order-params.type";
import { ChangellyGetCountryAvailabilityParams } from "./changelly-get-country-availability-params.type";
import { ChangellyGetCurrencyListParams } from "./changelly-get-currency-list-params.type";
import { ChangellyGetOffersParams } from "./changelly-get-offers-params.type";
import { ChangellyValidateWalletAddressParams } from "./changelly-validate-wallet-address-params.type";

export interface ChangellyBuildSignatureParams {
  /**
   * Base url.
   * https://fiat-api.changelly.com/v1 by default.
   */
  baseUrl?: string;

  /**
   * Request address.
   */
  pathname: ChangellyRequestUrl | string;

  /**
   * Request query parameteres.
   */
  params?:
    | ChangellyGetCurrencyListParams
    | ChangellyGetCountryAvailabilityParams
    | ChangellyGetOffersParams;

  /**
   * Request body parameters.
   */
  data?: ChangellyCreateOrderParams | ChangellyValidateWalletAddressParams;
}
