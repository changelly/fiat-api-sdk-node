import { ChangellyPaymentMethod, ChangellyProvider } from "../enums";

export type ChangellyCreateOrderParams = {
  /**
   * Order ID provided by you.
   */
  externalOrderId: string;

  /**
   * User ID provided by you.
   */
  externalUserId: string;

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
   * Is required if provided country is US.
   */
  state?: string;

  /**
   * User's IP address.
   */
  ip?: string;

  /**
   * Recipient wallet address.
   * Here are 2 simple use cases of this parameter:
   * - If you want to provide the cryptocurrency purchase service, you should enable the user to specify the wallet address.
   * - If you want to sell your products for fiat and receive cryptocurrency in your wallet, you should specify your own wallet address.
   */
  walletAddress: string;

  /**
   * Property required for wallet addresses of currencies that use an additional ID for transaction processing (XRP, XLM, EOS, BNB).
   */
  walletExtraId?: string;

  /**
   * The payment method code.
   */
  paymentMethod?: ChangellyPaymentMethod;

  /**
   * User Agent.
   */
  userAgent?: string;

  /**
   * Metadata object, which can contain any parameters you need.
   */
  metadata?: Record<string, unknown>;
};
