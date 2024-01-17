export interface ChangellyErrorDetails {
  /**
   * Error cause. For example, it can equal the missing request parameter for the validation error type.
   */
  cause: string;

  /**
   * Error value.
   */
  value: string;
}
