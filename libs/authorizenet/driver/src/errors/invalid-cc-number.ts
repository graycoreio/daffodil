import { DaffError, DaffInheritableError } from '@daffodil/core';

/**
 * An error thrown when the credit card number is invalid.
 */
export class DaffAuthorizenetInvalidCCNumberError extends DaffInheritableError implements DaffError {
  public readonly code: string = 'DAFF_AUTHORIZENET_INVALID_CC_NUMBER';

	constructor(public message: string) {
		super(message);
	}
}
