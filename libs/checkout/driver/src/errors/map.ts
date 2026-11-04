import { DaffCheckoutDriverErrorCodes } from './codes.enum';
import { DaffCheckoutInvalidAPIResponseError } from './invalid-api-response.error';
import { DaffCheckoutMissingEmailError } from './missing-email.error';

/**
 * A mapping from error codes to error class constructors.
 */
export const DaffCheckoutDriverErrorMap = {
  [DaffCheckoutDriverErrorCodes.INVALID_API_RESPONSE]: DaffCheckoutInvalidAPIResponseError,
  [DaffCheckoutDriverErrorCodes.EMAIL_MISSING]: DaffCheckoutMissingEmailError,
};
