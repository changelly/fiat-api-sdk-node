import { ChangellyUnauthorizedExceptionType } from "../types";

import { ChangellyBaseException } from "./changelly-base.exception";

export class ChangellyUnauthorizedException<D> extends ChangellyBaseException<
  ChangellyUnauthorizedExceptionType,
  D
> {}
