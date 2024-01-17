import { ChangellyProvider } from "../enums";

export interface ChangellyGetOffersParams {
  /**
   * On-Ramp provider code.
   */
  providerCode?: ChangellyProvider;

  /**
   * User ID provided by you.
   */
  externalUserId?: string;

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
}
