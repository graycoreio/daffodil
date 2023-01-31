import {
  DAFF_CUSTOMER_ADDRESS_NOT_FOUND_ERROR_CODE,
  DaffCustomerAddressNotFoundError,
} from './address-not-found';
import {
  DaffCustomerInvalidAPIResponseError,
  DAFF_CUSTOMER_INVALID_API_RESPONSE_ERROR_CODE,
} from './invalid-api-response';

/**
 * A mapping from error codes to error class constructors.
 */
export const DaffCustomerOrderDriverErrorMap = {
  [DAFF_CUSTOMER_INVALID_API_RESPONSE_ERROR_CODE]: DaffCustomerInvalidAPIResponseError,
  [DAFF_CUSTOMER_ADDRESS_NOT_FOUND_ERROR_CODE]: DaffCustomerAddressNotFoundError,
};
