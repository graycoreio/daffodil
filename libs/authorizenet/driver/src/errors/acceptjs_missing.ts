import { DaffError, DaffInheritableError } from '@daffodil/core';

/**
 * An error thrown when Accept.js has not been loaded.
 */
export class DaffAuthorizenetAcceptjsMissingError extends DaffInheritableError implements DaffError {
  public readonly code: string = 'DAFF_AUTHORIZENET_ACCEPTJS_MISSING';

	constructor(public message: string) {
		super(message);
	}
}
