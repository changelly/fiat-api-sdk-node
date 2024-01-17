import { ChangellyCurrency } from "../enums";

export interface ChangellyGetCurrencyListResponse {
  /**
   * Currency ticker in uppercase. It is a unique identifier of the currency.
   */
  ticker: string;

  /**
   * Currency name that you can specify in your interface.
   */
  name: string;

  /**
   * Currency type.
   */
  type: ChangellyCurrency;

  /**
   * Extra ID name of the cryptocurrency, for example, "Memo". Extra ID is required for the following currencies:
   * - XRP
   * - XLM
   * - EOS
   * - BNB
   * For fiat currencies and cryptocurrencies without an extra ID, extraIdName equals null.
   * Note. If the currency has extra ID, you need to provide walletExtraId parameter in the request to /v1/orders and /v1/validate-address endpoints.
   */
  extraIdName: string | null;

  /**
   * URL of currency icon.
   */
  iconUrl: string;

  /**
   * Currency precision. For fiat currencies, it is always equal to 2.
   */
  precision: string;
}
