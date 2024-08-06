import { ChangellySupportedFlow } from "../enums";

export interface ChangellyCurrencyProvider {
  /**
   * State ISO 3166-2 code.
   */
  code: string;

  /**
   * State name.
   */
  name: string;

  /**
   * Provider code. Example: 'moonpay'.
   */
  providerCode: string;

  /**
   * Supported intentions. May be 'buy' or 'sell'.
   */
  supportedFlows: ChangellySupportedFlow[];

  /**
   * Optional. Exchange limit for provider.
   */
  limits?: {
    send: {
      min: number | null;
      max: number | null;
    };
    get: {
      min: number | null;
      max: number | null;
    };
  };
}
