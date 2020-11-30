import { DaffError, DaffInheritableError } from '@daffodil/core';

/**
 * An error thrown when required information is missing from the request payload.
 */
export class DaffAuthorizenetInputMissingError extends DaffInheritableError implements DaffError {
  public readonly code: string = 'DAFF_AUTHORIZENET_INPUT_MISSING';

	constructor(public message: string) {
		super(message);
	}
}
