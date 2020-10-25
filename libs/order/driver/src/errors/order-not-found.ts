import { DaffInheritableError } from '@daffodil/core';

export class DaffOrderNotFoundError extends DaffInheritableError {
  public static readonly code: string = 'ORDER_NOT_FOUND';

	constructor(public message: string) {
		super(message);
	}
}
