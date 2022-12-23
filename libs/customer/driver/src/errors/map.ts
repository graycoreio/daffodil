import {
  DaffCustomerInvalidAPIResponseError,
  DAFF_CUSTOMER_INVALID_API_RESPONSE_ERROR_CODE,
} from './invalid-api-response';

/**
 * A mapping from error codes to error class constructors.
 */
export const DaffCustomerDriverErrorMap = {
  [DAFF_CUSTOMER_INVALID_API_RESPONSE_ERROR_CODE]: DaffCustomerInvalidAPIResponseError,
};
