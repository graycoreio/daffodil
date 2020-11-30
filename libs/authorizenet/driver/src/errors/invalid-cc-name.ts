import { DaffError, DaffInheritableError } from '@daffodil/core';

/**
 * An error thrown when the cardholder name is invalid.
 * It should be no more than 64 characters in length.
 */
export class DaffAuthorizenetInvalidCCNameError extends DaffInheritableError implements DaffError {
  public readonly code: string = 'DAFF_AUTHORIZENET_INVALID_CC_NAME';

	constructor(public message: string) {
		super(message);
	}
}
