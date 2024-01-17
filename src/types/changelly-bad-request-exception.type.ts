import { ChangellyErrorType } from "../enums";

import { ChangellyExceptionType } from "./changelly-exception-type";

export interface ChangellyBadRequestExceptionType
  extends ChangellyExceptionType {
  errorType:
    | ChangellyErrorType.Validation
    | ChangellyErrorType.Timeout
    | ChangellyErrorType.Unavailable
    | ChangellyErrorType.Limits
    | ChangellyErrorType.Country
    | ChangellyErrorType.State
    | ChangellyErrorType.Currency
    | ChangellyErrorType.PaymentMethod
    | ChangellyErrorType.InvalidOffer;
}
