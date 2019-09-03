export interface JsonRes<T> {
  data?: T;
  errors?: HasuraError[];
}

interface HasuraError {
  path: string;
  error: string;
  code: string;
}
