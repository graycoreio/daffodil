import { DaffCartErrorCodes } from './codes.enum';
import { DaffCartResolutionError, DaffCartStorageResolutionError, DaffCartServerSideResolutionError, DaffCartNotFoundOrCreatedResolutionError } from './resolution/public_api';

/**
 * A mapping from error codes to error class constructors.
 */
export const DaffCartErrorMap = {
  [DaffCartErrorCodes.CART_RESOLUTION]: DaffCartResolutionError,
  [DaffCartErrorCodes.CART_STORAGE_RESOLUTION]: DaffCartStorageResolutionError,
  [DaffCartErrorCodes.CART_SERVER_SIDE_RESOLUTION]: DaffCartServerSideResolutionError,
  [DaffCartErrorCodes.CART_NOT_FOUND_OR_CREATED_RESOLUTION]: DaffCartNotFoundOrCreatedResolutionError,
}
