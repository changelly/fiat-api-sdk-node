import { ChangellyInternalServerErrorExceptionType } from "../types";

import { ChangellyBaseException } from "./changelly-base.exception";

export class ChangellyInternalServerErrorException<
  D,
> extends ChangellyBaseException<
  ChangellyInternalServerErrorExceptionType,
  D
> {}
