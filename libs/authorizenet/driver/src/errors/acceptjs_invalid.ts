import { DaffError, DaffInheritableError } from '@daffodil/core';

import { DaffAuthorizeNetDriverErrorCodes } from './error-codes.enum';

/**
 * An error thrown when Accept.js has been loaded incorrectly.
 * This can be caused by the script being loaded from a local source
 * or when the browser or proxy has improperly cached an older version of the script.
 */
export class DaffAuthorizeNetAcceptjsInvalidError extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffAuthorizeNetDriverErrorCodes.ACCEPTJS_INVALID;

	constructor(public message: string) {
		super(message);
	}
}
