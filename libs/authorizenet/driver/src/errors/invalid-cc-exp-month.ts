import { DaffError, DaffInheritableError } from '@daffodil/core';

/**
 * An error thrown when the credit card expiration month is invalid.
 */
export class DaffAuthorizenetInvalidCCExpMonthError extends DaffInheritableError implements DaffError {
  public readonly code: string = 'DAFF_AUTHORIZENET_INVALID_CC_EXP_MONTH';

	constructor(public message: string) {
		super(message);
	}
}
