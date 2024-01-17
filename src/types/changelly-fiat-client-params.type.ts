export interface ChangellyFiatClientParams {
  /**
   * Changelly Fiat API public key.
   */
  publicKey: string;

  /**
   * Changelly Fiat API private key.
   */
  privateKey: string;

  /**
   * Changelly Fiat API callback public key.
   */
  callbackPublicKey?: string;

  /**
   * Base url of Changelly Fiat API.
   * https://fiat-api.changelly.com/v1 by default.
   */
  baseUrl?: string;
}
