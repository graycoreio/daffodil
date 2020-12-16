import { DaffError, DaffInheritableError } from '@daffodil/core';

import { DaffAuthorizeNetDriverErrorCodes } from './error-codes.enum';

/**
 * An error thrown when required information is missing from the request payload.
 */
export class DaffAuthorizeNetInputMissingError extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffAuthorizeNetDriverErrorCodes.INPUT_MISSING;

	constructor(public message: string) {
		super(message);
	}
}
