import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

export const DAFF_CUSTOMER_ADDRESS_NOT_FOUND_ERROR_CODE = 'DAFF_CUSTOMER_ADDRESS_NOT_FOUND';

/**
 * An error indicating that the requested address cannot be found.
 */
export class DaffCustomerAddressNotFoundError extends DaffInheritableError implements DaffError {
  public readonly code: string = DAFF_CUSTOMER_ADDRESS_NOT_FOUND_ERROR_CODE;

  constructor(public message: string) {
    super(message);
  }
}
