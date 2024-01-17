import { ChangellyErrorType } from "../enums";

import { ChangellyExceptionType } from "./changelly-exception-type";

export interface ChangellyTooManyRequestsExceptionType
  extends ChangellyExceptionType {
  errorType: ChangellyErrorType.TooManyRequests;
  errorDetails: null;
}
