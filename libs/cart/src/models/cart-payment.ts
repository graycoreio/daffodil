/**
 * The kind of payment used for the cart.
 */
export interface DaffCartPaymentMethod {
  /**
   * Identifies the kind of payment used.
   * e.g. "credit-card"
   */
  method: string;
  /**
   * A very generic collection of payment info.
   * Payment and processor specific.
   */
  payment_info?: any;
}
