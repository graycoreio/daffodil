import { DaffPaypalExpressUrlsResponse } from './paypal-urls-response';

/**
 * The result from creating a paypal express session.
 */
export interface DaffPaypalExpressTokenResponse {
  /**
   * The token for the session.
   */
  token: string;
  /**
   * The URLs to which the user can navigate in order to interact with the session.
   */
  urls: DaffPaypalExpressUrlsResponse;
}
