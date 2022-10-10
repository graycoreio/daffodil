/**
 * A payment request that can be used to generate a token or additional data for use with an ecommerce platform.
 */
export interface DaffPaymentRequest<T = unknown> {
  /**
   * The payment kind. A constant identifying the payment processor and payment method.
   */
  kind: string;
  /**
   * The payment data that will be used to generate a payment token or additional data.
   */
  data?: T;
}
