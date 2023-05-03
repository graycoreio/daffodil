import {
  DaffCartStoreCreditInvalidAPIResponseError,
  DAFF_CART_STORE_CREDIT_INVALID_API_RESPONSE_ERROR_CODE,
} from './invalid-api-response';

/**
 * A mapping from error codes to error class constructors.
 */
export const DaffCartStoreCreditDriverErrorMap = {
  [DAFF_CART_STORE_CREDIT_INVALID_API_RESPONSE_ERROR_CODE]: DaffCartStoreCreditInvalidAPIResponseError,
};
