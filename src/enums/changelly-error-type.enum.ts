export enum ChangellyErrorType {
  /**
   * Validation error.
   */
  Validation = "validation",

  /**
   * Request to the provider was not completed in the allotted time.
   */
  Timeout = "timeout",

  /**
   * Request failed at the provider's end.
   */
  Unavailable = "unavailable",

  /**
   * Specified pay-in amount is less than the minimum or more than the maximum value for the fiat currency.
   */
  Limits = "limits",

  /**
   * Specified country is not supported by the provider.
   */
  Country = "country",

  /**
   * Offer requested for the United States, but the state parameter is not provided.
   */
  State = "state",

  /**
   * Specified currency pair is not supported by the provider.
   */
  Currency = "currency",

  /**
   * Specified payment method is not supported by the provider.
   */
  PaymentMethod = "paymentMethod",

  /**
   * On-Ramp provider returned an invalid offer.
   */
  InvalidOffer = "invalidOffer",

  /**
   * Unauthorized error
   */
  Unauthorized = "unauthorized",

  /**
   * Too many requests error
   */
  TooManyRequests = "tooManyRequests",

  /**
   * Internal server error
   */
  InternalServerError = "internalServerError",
}
