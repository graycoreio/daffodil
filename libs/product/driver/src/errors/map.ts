import { DaffProductDriverErrorCodes } from './codes.enum';
import { DaffProductInvalidAPIResponseError } from './invalid-api-response';
import { DaffProductNotFoundError } from './product-not-found';

/**
 * A mapping from error codes to error class constructors.
 */
export const DaffProductDriverErrorMap = {
  [DaffProductDriverErrorCodes.PRODUCT_NOT_FOUND]: DaffProductNotFoundError,
  [DaffProductDriverErrorCodes.INVALID_API_RESPONSE]: DaffProductInvalidAPIResponseError,
};
