/**
 * A service to manage the headers during SSR.
 */
export interface DaffSsrHeaderService {
  /**
   * Adds a header to the server response.
   */
  addResponseHeader(name: string, value: string): void;
}
