import { DaffError, DaffInheritableError } from '@daffodil/core';

export class DaffAuthInvalidAPIResponseError extends DaffInheritableError implements DaffError {
  public readonly code: string = 'DAFF_AUTH_INVALID_API_RESPONSE';

	constructor(public message: string) {
		super(message);
	}
}
