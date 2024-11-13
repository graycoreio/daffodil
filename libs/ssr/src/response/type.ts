/**
 * The document response for a server-side render.
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
