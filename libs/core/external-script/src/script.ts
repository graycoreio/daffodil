export interface DaffExternalScript {
  src: string;
  async?: boolean;
  defer?: boolean;
  [key: `data-${string}`]: string;
}
