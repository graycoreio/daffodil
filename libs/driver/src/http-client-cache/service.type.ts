/**
 * A service for interacting with the request cache of the HTTP client currently in use.
 * This has nothing to do with local storage or any kind of persistent client data.
 */
export interface DaffDriverHttpClientCacheServiceInterface {
  /**
   * Resets the client's cache store to the initial state.
   */
  reset(): void;
}
