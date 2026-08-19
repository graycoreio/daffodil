/**
 * The document response for a server-side render.
 * @deprecated in favor of native Angular features: https://angular.dev/guide/ssr#accessing-request-and-response-via-di. Deprecated in version 0.94.0. Will be removed in version 0.97.0.
 */
export interface DaffSsrResponse {
  /**
   * Get the value of a header by name.
   */
  get(header: string): Array<string> | string;
  /**
   * Set a header to a particular value. Removes all existing headers of this name.
   */
  set(name: string, value: Array<string> | string): void;
  /**
   * Append a header to the response, preserving the existing headers.
   */
  append(name: string, value: Array<string> | string): void;
  /**
   * Set the status code of the response.
   */
  status(code: number): void;
}
