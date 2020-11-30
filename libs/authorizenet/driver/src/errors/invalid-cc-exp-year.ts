import { DaffError, DaffInheritableError } from '@daffodil/core';

/**
 * An error thrown when the credit card expiration year is invalid.
 */
export class DaffAuthorizeNetInvalidCCExpYearError extends DaffInheritableError implements DaffError {
  public readonly code: string = 'DAFF_AUTHORIZE_NET_INVALID_CC_EXP_YEAR';

	constructor(public message: string) {
		super(message);
	}
}
