import { ChangellyTooManyRequestsExceptionType } from "../types";

import { ChangellyBaseException } from "./changelly-base.exception";

export class ChangellyTooManyReequestsException<
  D,
> extends ChangellyBaseException<ChangellyTooManyRequestsExceptionType, D> {}
