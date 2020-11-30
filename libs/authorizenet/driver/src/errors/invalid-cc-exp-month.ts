import { DaffError, DaffInheritableError } from '@daffodil/core';

/**
 * An error thrown when the credit card expiration month is invalid.
 */
export class DaffAuthorizeNetInvalidCCExpMonthError extends DaffInheritableError implements DaffError {
  public readonly code: string = 'DAFF_AUTHORIZE_NET_INVALID_CC_EXP_MONTH';

	constructor(public message: string) {
		super(message);
	}
}
