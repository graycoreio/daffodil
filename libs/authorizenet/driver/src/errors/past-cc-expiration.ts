import { DaffError, DaffInheritableError } from '@daffodil/core';

/**
 * An error thrown when the credit card expiration date is in the past.
 */
export class DaffAuthorizenetPastCCExpirationError extends DaffInheritableError implements DaffError {
  public readonly code: string = 'DAFF_AUTHORIZENET_PAST_CC_EXPIRATION';

	constructor(public message: string) {
		super(message);
	}
}
