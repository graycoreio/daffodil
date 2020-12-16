import { DaffError, DaffInheritableError } from '@daffodil/core';

import { DaffAuthorizeNetDriverErrorCodes } from './error-codes.enum';

/**
 * An error thrown when the credit card number is invalid.
 */
export class DaffAuthorizeNetInvalidCCNumberError extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffAuthorizeNetDriverErrorCodes.INVALID_CC_NUMBER;

	constructor(public message: string) {
		super(message);
	}
}
