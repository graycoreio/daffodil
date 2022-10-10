import { DaffPaymentResponse } from '@daffodil/payment';

import { DaffPaypalPaymentRequest } from './request.type';

/**
 * The data needed to apply a paypal express payment to the user's current cart.
 * Because token generation is done in an earlier step, apply payment response data is identical to request data;
 * the token is simply passed to the cart.
 */
export interface DaffPaypalExpressPaymentData {
  /**
   * The token for the paypal express session.
   */
  token: string;
  /**
   * The merchant ID returned by paypal.
   */
  payerId: string;
}

export type DaffPaypalExpressPaymentResponse = DaffPaymentResponse;
export type DaffPaypalExpressPaymentRequest = DaffPaypalPaymentRequest<DaffPaypalExpressPaymentData>;
