import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

export const DAFF_CUSTOMER_PAYMENT_DEFAULT_PAYMENT_DELETION_ERROR_CODE = 'DAFF_CUSTOMER_PAYMENT_DEFAULT_PAYMENT_DELETION';

/**
 * An error indicating that a deletion of the customer's default payment was attempted and failed.
 */
export class DaffCustomerPaymentDefaultPaymentDeletionError extends DaffInheritableError implements DaffError {
  public readonly code: string = DAFF_CUSTOMER_PAYMENT_DEFAULT_PAYMENT_DELETION_ERROR_CODE;

  constructor(public message: string) {
    super(message);
  }
}
