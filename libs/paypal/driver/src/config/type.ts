import { DaffPaypalExpressUrlsRequest } from '@daffodil/paypal';

export interface DaffPaypalExpressDriverConfig {
  /**
   * The URLs to which paypal will navigate the users for each
   * corresponding result of the paypal express checkout process.
   */
  urls: DaffPaypalExpressUrlsRequest;
  /**
   * The name of the query params to which paypal will set the respective values.
   */
  params: {
    /**
     * The token query param name.
     */
    token: string;
    /**
     * The customer ID query param name.
     */
    payerId: string;
  };
}
