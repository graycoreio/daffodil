import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

export const DAFF_CUSTOMER_STORE_CREDIT_INVALID_API_RESPONSE_ERROR_CODE = 'DAFF_CUSTOMER_STORE_CREDIT_INVALID_API_RESPONSE';

/**
 * A general error indicating that the platform returned a response which cannot be processed.
 */
export class DaffCustomerStoreCreditInvalidAPIResponseError extends DaffInheritableError implements DaffError {
  public readonly code: string = DAFF_CUSTOMER_STORE_CREDIT_INVALID_API_RESPONSE_ERROR_CODE;

  constructor(public message: string) {
    super(message);
  }
}
