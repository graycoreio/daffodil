export interface DaffAuthorizeNetStateConfig {
  /**
   * How many times Daffodil will retry the Accept.js load.
   * Defaults to 5.
   */
  acceptMaxRetries: number;

  /**
   * The Accept.js loading retry backoff timing in milliseconds.
   * Defaults to 30.
   */
  acceptBackoffTiming: number;
}
