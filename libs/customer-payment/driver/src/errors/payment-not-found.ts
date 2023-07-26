import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

export const DAFF_CUSTOMER_PAYMENT_NOT_FOUND_ERROR_CODE = 'DAFF_CUSTOMER_PAYMENT_NOT_FOUND';

/**
 * An error indicating that the requested payment cannot be found.
 */
export class DaffCustomerPaymentNotFoundError extends DaffInheritableError implements DaffError {
  public readonly code: string = DAFF_CUSTOMER_PAYMENT_NOT_FOUND_ERROR_CODE;

  constructor(public message: string) {
    super(message);
  }
}
