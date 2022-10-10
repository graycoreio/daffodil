/**
 * The URLs to which paypal will navigate the users for each
 * corresponding result of the paypal express checkout process.
 */
export interface DaffPaypalExpressUrlsRequest {
  /**
   * Checkout is completed and payment should be added to the cart.
   */
  return: string;
  /**
   * Checkout was canceled and the cart should not be modified.
   */
  cancel: string;
}
