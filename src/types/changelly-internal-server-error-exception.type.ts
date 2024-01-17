import { ChangellyErrorType } from "../enums";

import { ChangellyExceptionType } from "./changelly-exception-type";

export interface ChangellyInternalServerErrorExceptionType
  extends ChangellyExceptionType {
  errorType: ChangellyErrorType.InternalServerError;
  errorDetails: null;
}
