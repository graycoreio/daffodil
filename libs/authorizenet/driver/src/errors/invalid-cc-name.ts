import { DaffError, DaffInheritableError } from '@daffodil/core';

/**
 * An error thrown when the cardholder name is invalid.
 * It should be no more than 64 characters in length.
 */
export class DaffAuthorizeNetInvalidCCNameError extends DaffInheritableError implements DaffError {
  public readonly code: string = 'DAFF_AUTHORIZE_NET_INVALID_CC_NAME';

	constructor(public message: string) {
		super(message);
	}
}
