import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

import { DaffCartDriverErrorCodes } from './codes.enum';

/**
 * An error thrown when the payment token used for the payment method update has expired.
 * This happens when the a place order request happens too long after payment update.
 * The payment must be updated again before an order can be placed.
 */
export class DaffCartExpiredPaymentTokenError extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffCartDriverErrorCodes.EXPIRED_PAYMENT_METHOD;

  constructor(public message: string) {
    super(message);
  }
}
