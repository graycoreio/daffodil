/**
 * The URLs to which the user can navigate in order to interact with the session.
 */
export interface DaffPaypalExpressUrlsResponse {
  /**
   * Navigate the user here to start the paypal express checkout process.
   */
  start: string;
  /**
   * Navigate the user here to edit their paypal express checkout.
   */
  edit: string;
}
