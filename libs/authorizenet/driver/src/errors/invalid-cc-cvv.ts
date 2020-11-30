import { DaffError, DaffInheritableError } from '@daffodil/core';

/**
 * An error thrown when the credit card cvv number is invalid.
 */
export class DaffAuthorizenetInvalidCCCVVError extends DaffInheritableError implements DaffError {
  public readonly code: string = 'DAFF_AUTHORIZENET_INVALID_CC_CVV';

	constructor(public message: string) {
		super(message);
	}
}
