import { DaffError, DaffInheritableError } from '@daffodil/core';

import { DaffAuthorizeNetDriverErrorCodes } from './error-codes.enum';

/**
 * An error thrown when either the API Login ID or Public Client Key values are incorrect.
 */
export class DaffAuthorizeNetAuthFailedError extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffAuthorizeNetDriverErrorCodes.AUTH_FAILED;

	constructor(public message: string) {
		super(message);
	}
}
