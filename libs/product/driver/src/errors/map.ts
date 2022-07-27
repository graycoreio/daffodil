import { DaffProductDriverErrorCodes } from './codes.enum';
import { DaffProductNotFoundError } from './product-not-found';

/**
 * A mapping from error codes to error class constructors.
 */
export const DaffProductDriverErrorMap = {
  [DaffProductDriverErrorCodes.PRODUCT_NOT_FOUND]: DaffProductNotFoundError,
};
