import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

export const DAFF_CUSTOMER_DEFAULT_SHIPPING_ADDRESS_DELETION_ERROR_CODE = 'DAFF_CUSTOMER_DEFAULT_SHIPPING_ADDRESS_DELETION';

/**
 * An error indicating that a deletion of the customer's default shipping address was attempted and failed.
 */
export class DaffCustomerDefaultShippingAddressDeletionError extends DaffInheritableError implements DaffError {
  public readonly code: string = DAFF_CUSTOMER_DEFAULT_SHIPPING_ADDRESS_DELETION_ERROR_CODE;

  constructor(public message: string) {
    super(message);
  }
}
