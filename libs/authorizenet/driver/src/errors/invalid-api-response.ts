import { DaffError, DaffInheritableError } from '@daffodil/core';

/**
 * An error thrown when the platform response is missing key information or malformed in an unrecoverable way.
 */
export class DaffAuthorizenetInvalidAPIResponseError extends DaffInheritableError implements DaffError {
  public readonly code: string = 'DAFF_AUTHORIZENET_INVALID_API_RESPONSE';

	constructor(public message: string) {
		super(message);
	}
}
