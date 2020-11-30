import { DaffError, DaffInheritableError } from '@daffodil/core';

/**
 * An error thrown when either the API Login ID or Public Client Key values are incorrect.
 */
export class DaffAuthorizenetAuthFailedError extends DaffInheritableError implements DaffError {
  public readonly code: string = 'DAFF_AUTHORIZENET_AUTH_FAILED';

	constructor(public message: string) {
		super(message);
	}
}
