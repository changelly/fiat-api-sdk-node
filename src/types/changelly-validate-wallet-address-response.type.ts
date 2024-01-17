export interface ChangellyValidateWalletAddressResponse {
  /**
   * Is false if the wallet address or extra ID is incorrect.
   */
  result: boolean;

  /**
   * Specifies whether the wallet address or extra ID is incorrect.
   * If result is true, cause equals null.
   */
  cause: "walletAddress" | "walletExtraId" | null;
}
