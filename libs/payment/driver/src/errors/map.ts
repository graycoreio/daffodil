import {
  DaffPaymentInvalidAPIResponseError,
  DAFF_PAYMENT_INVALID_API_RESPONSE_ERROR_CODE,
} from './invalid-api-response';

/**
 * A mapping from error codes to error class constructors.
 */
export const DaffPaymentDriverErrorMap = {
  [DAFF_PAYMENT_INVALID_API_RESPONSE_ERROR_CODE]: DaffPaymentInvalidAPIResponseError,
};
