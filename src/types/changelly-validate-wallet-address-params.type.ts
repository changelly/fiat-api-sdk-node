export interface ChangellyValidateWalletAddressParams {
  /**
   * Cryptocurrency ticker in uppercase.
   */
  currency: string;

  /**
   * Recipient wallet address.
   */
  walletAddress: string;

  /**
   * Property required for wallet addresses of currencies that use an additional ID for transaction processing (XRP, XLM, EOS, BNB).
   */
  walletExtraId?: string;
}
