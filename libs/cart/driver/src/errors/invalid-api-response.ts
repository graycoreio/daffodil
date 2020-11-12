import { DaffError, DaffInheritableError } from '@daffodil/core';

export class DaffCartInvalidAPIResponseError extends DaffInheritableError implements DaffError {
  public readonly code: string = 'DAFF_CART_INVALID_API_RESPONSE';

	constructor(public message: string) {
		super(message);
	}
}
