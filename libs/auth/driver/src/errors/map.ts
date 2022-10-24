import { DaffAuthenticationFailedError } from './authentication-failed';
import { DaffAuthDriverErrorCodes } from './codes.enum';
import { DaffAuthInvalidAPIResponseError } from './invalid-api-response';
import { DaffRegistrationFailedError } from './registration-failed';
import { DaffUnauthorizedError } from './unauthorized';

/**
 * A mapping from error codes to error class constructors.
 */
export const DaffAuthDriverErrorMap = {
  [DaffAuthDriverErrorCodes.AUTHENTICATION_FAILED]: DaffAuthenticationFailedError,
  [DaffAuthDriverErrorCodes.INVALID_API_RESPONSE]: DaffAuthInvalidAPIResponseError,
  [DaffAuthDriverErrorCodes.REGISTRATION_FAILED]: DaffRegistrationFailedError,
  [DaffAuthDriverErrorCodes.UNAUTHORIZED]: DaffUnauthorizedError,
};
