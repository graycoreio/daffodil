/**
 * The data needed to generate a paypal express token.
 * Note that return and cancel URL stubs are provided as a driver config.
 */
export interface DaffPaypalExpressTokenRequest {
  /**
   * Whether the token generation process was initiated from the express checkout button.
   * This implies that information the user inputs to paypal can and will be used to fill out checkout info on the cart.
   */
  button: boolean;
}
