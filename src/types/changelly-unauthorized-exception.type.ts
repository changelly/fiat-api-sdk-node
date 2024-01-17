import { ChangellyErrorType } from "../enums";

import { ChangellyExceptionType } from "./changelly-exception-type";

export interface ChangellyUnauthorizedExceptionType
  extends ChangellyExceptionType {
  errorType: ChangellyErrorType.Unauthorized;
  errorDetails: null;
}
