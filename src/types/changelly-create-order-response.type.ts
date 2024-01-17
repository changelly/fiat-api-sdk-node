import { ChangellyPaymentMethod, ChangellyProvider } from "../enums";

export interface ChangellyCreateOrderResponse {
  /**
   * URL to the provider's purchase page.
   */
  redirectUrl: string;

  /**
   * Internal order ID provided by Fiat API.
   */
  orderId: string;

  /**
   * User ID provided by you.
   */
  externalUserId: string;

  /**
   * Order ID provided by you.
   */
  externalOrderId: string;

  /**
   * On-Ramp provider code.
   */
  providerCode: ChangellyProvider;

  /**
   * Ticker of the pay-in currency in uppercase.
   */
  currencyFrom: string;

  /**
   * Ticker of the payout currency in uppercase.
   */
  currencyTo: string;

  /**
   * Amount of currency the user is going to pay.
   */
  amountFrom: string;

  /**
   * Country ISO 3166-1 code (Alpha-2).
   */
  country: string;

  /**
   * State ISO 3166-2 code.
   * Will be if provided country is US.
   */
  state: string | null;

  /**
   * User's IP address.
   */
  ip: string | null;

  /**
   * Recipient wallet address.
   */
  walletAddress: string;

  /**
   * Property required for wallet addresses of currencies that use an additional ID for transaction processing (XRP, XLM, EOS, BNB).
   */
  walletExtraId: string | null;

  /**
   * The payment method code.
   */
  paymentMethod: ChangellyPaymentMethod | null;

  /**
   * User Agent.
   */
  userAgent: string | null;

  /**
   * Metadata object, which can contain any parameters you need:
   * - If you don't provide the metadata object in the request, null will be returned in metadata in response.
   * - If you specify an empty object in the request, an empty object will be returned in the response.
   */
  metadata: Record<string, unknown> | null;

  /**
   * Time in ISO 8601 format.
   */
  createdAt: string;
}
