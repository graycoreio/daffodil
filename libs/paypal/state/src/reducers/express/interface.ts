export interface DaffPaypalExpressReducerState {
  /**
   * The PayPal URL that allows the buyer to edit their checkout details.
   */
  editUrl: string;
  /**
   * The URL to the PayPal login page.
   */
  startUrl: string;
}
