import {
  DaffCustomerPaymentDefaultPaymentDeletionError,
  DAFF_CUSTOMER_PAYMENT_DEFAULT_PAYMENT_DELETION_ERROR_CODE,
} from './default-payment-deletion';
import {
  DaffCustomerPaymentInvalidAPIResponseError,
  DAFF_CUSTOMER_PAYMENT_INVALID_API_RESPONSE_ERROR_CODE,
} from './invalid-api-response';
import {
  DAFF_CUSTOMER_PAYMENT_NOT_FOUND_ERROR_CODE,
  DaffCustomerPaymentNotFoundError,
} from './payment-not-found';

/**
 * A mapping from error codes to error class constructors.
 */
export const DaffCustomerPaymentDriverErrorMap = {
  [DAFF_CUSTOMER_PAYMENT_INVALID_API_RESPONSE_ERROR_CODE]: DaffCustomerPaymentInvalidAPIResponseError,
  [DAFF_CUSTOMER_PAYMENT_NOT_FOUND_ERROR_CODE]: DaffCustomerPaymentNotFoundError,
  [DAFF_CUSTOMER_PAYMENT_DEFAULT_PAYMENT_DELETION_ERROR_CODE]: DaffCustomerPaymentDefaultPaymentDeletionError,
};
