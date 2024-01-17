export interface ChangellyResponseConfig<T> {
  status: number;
  statusText: string;
  data: T;
}
