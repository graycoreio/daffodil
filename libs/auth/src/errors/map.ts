import { DaffAuthErrorCodes } from './codes.enum';
import { DaffAuthMissingTokenError } from './missing-token';

/**
 * A mapping from error codes to error class constructors.
 */
export const DaffAuthErrorMap = {
  [DaffAuthErrorCodes.MISSING_TOKEN]: DaffAuthMissingTokenError,
};
