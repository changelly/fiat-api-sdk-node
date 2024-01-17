import { ChangellyBadRequestExceptionType } from "../types";

import { ChangellyBaseException } from "./changelly-base.exception";

export class ChangellyBadRequestException<D> extends ChangellyBaseException<
  ChangellyBadRequestExceptionType,
  D
> {}
