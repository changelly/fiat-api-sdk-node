import { ChangellyCurrency, ChangellyProvider } from "../enums";

export interface ChangellyGetCurrencyListParams {
  /**
   * Type of currency.
   * If the currency type is not specified, the endpoint will return both fiat currencies and cryptocurrencies.
   */
  type?: ChangellyCurrency;

  /**
   * The provider whose currencies you want to view.
   * If the On-Ramp provider code is not specified, the endpoint will return the supported currencies of all providers.
   */
  providerCode?: ChangellyProvider;
}
