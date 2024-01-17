export interface ChangellyRequestConfig<D> {
  url?: string;
  method?: string;
  baseURL?: string;
  headers?: Record<string, string | string[]>;
  query?: Record<string, string>;
  data?: D;
}
