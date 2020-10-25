import { DaffInheritableError } from '@daffodil/core';

export class DaffInvalidAPIResponseError extends DaffInheritableError {
  public static readonly code: string = 'INVALID_API_RESPONSE';

	constructor(public message: string) {
		super(message);
	}
}
