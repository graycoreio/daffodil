import { DaffError, DaffInheritableError } from '@daffodil/core';

/**
 * An error thrown when the postal code is invalid.
 * It should be no more than 20 characters in length.
 */
export class DaffAuthorizenetInvalidPostalCodeError extends DaffInheritableError implements DaffError {
  public readonly code: string = 'DAFF_AUTHORIZENET_INVALID_POSTAL_CODE';

	constructor(public message: string) {
		super(message);
	}
}
