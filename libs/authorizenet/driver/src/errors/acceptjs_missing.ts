import { DaffError, DaffInheritableError } from '@daffodil/core';

import { DaffAuthorizeNetDriverErrorCodes } from './error-codes.enum';

/**
 * An error thrown when Accept.js has not been loaded.
 */
export class DaffAuthorizeNetAcceptjsMissingError extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffAuthorizeNetDriverErrorCodes.ACCEPTJS_MISSING;

	constructor(public message: string) {
		super(message);
	}
}
