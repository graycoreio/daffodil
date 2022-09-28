/**
 * A payment response that can be sent to an ecommerce platform to set payment information for the provided method.
 */
export interface DaffPaymentResponse<T = unknown> {
  /**
   * The payment method.
   * This can be specific to the platform in use and should not be considered a constant.
   */
  method: string;
  /**
   * The payment data that represents validated payment information.
   */
  data?: T;
}
