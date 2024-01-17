import { AxiosError } from "axios";

import { ChangellyRequestConfig, ChangellyResponseConfig } from "../types";

export class ChangellyBaseException<T, D> extends Error {
  public readonly message: string;
  public readonly request?: ChangellyRequestConfig<D>;
  public readonly response?: ChangellyResponseConfig<T>;
  public readonly stack?: string;

  constructor(err: AxiosError<T, D>) {
    super(err.message);

    this.name = this.constructor.name;
    this.message = err.message;
    this.request = err.config
      ? {
          url: err.config.url,
          method: err.config.method,
          baseURL: err.config.baseURL,
          headers: err.config.headers,
          query: err.config.params,
          data: err.config.data,
        }
      : undefined;
    this.response = err.response
      ? {
          status: err.response.status,
          statusText: err.response.statusText,
          data: err.response.data,
        }
      : undefined;
    this.stack = err.stack;
  }
}
