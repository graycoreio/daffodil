import { DaffAuthErrorCodes } from '@daffodil/auth';

import { DaffAuthDriverErrorCodes } from '../errors/public_api';

/**
 * The error codes that indicate that the user definitely should not be in an unauthenticated state
 * and if an auth token exists in storage, it is invalid.
 * These are contrasted to network failures and other sporadic and generic errors that aren't
 * a guarantee of the token's invalidity.
 */
export const DAFF_AUTH_UNAUTHENTICATED_ERROR_CODES = [
  DaffAuthDriverErrorCodes.UNAUTHORIZED,
  DaffAuthDriverErrorCodes.AUTHENTICATION_FAILED,
  DaffAuthErrorCodes.MISSING_TOKEN,
];
