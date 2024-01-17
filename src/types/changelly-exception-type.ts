import { ChangellyErrorType } from "../enums";

import { ChangellyErrorDetails } from "./changelly-error-details.type";

export interface ChangellyExceptionType {
  errorType: ChangellyErrorType;
  errorMessage: string;
  errorDetails: ChangellyErrorDetails[] | null;
}
