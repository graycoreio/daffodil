import { DaffError, DaffInheritableError } from '@daffodil/core';

import { DaffAuthorizeNetDriverErrorCodes } from './error-codes.enum';

/**
 * An error thrown when requests are not made over HTTPS.
 */
export class DaffAuthorizeNetInsecureConnectionError extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffAuthorizeNetDriverErrorCodes.INSECURE_CONNECTION;

	constructor(public message: string) {
		super(message);
	}
}
