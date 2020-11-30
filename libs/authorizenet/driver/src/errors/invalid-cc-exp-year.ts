import { DaffError, DaffInheritableError } from '@daffodil/core';

/**
 * An error thrown when the credit card expiration year is invalid.
 */
export class DaffAuthorizenetInvalidCCExpYearError extends DaffInheritableError implements DaffError {
  public readonly code: string = 'DAFF_AUTHORIZENET_INVALID_CC_EXP_YEAR';

	constructor(public message: string) {
		super(message);
	}
}
