import { DaffError, DaffInheritableError } from '@daffodil/core';

export class DaffOrderInvalidAPIResponseError extends DaffInheritableError implements DaffError {
  public readonly code: string = 'DAFF_ORDER_INVALID_API_RESPONSE';

	constructor(public message: string) {
		super(message);
	}
}
