import { DaffError, DaffInheritableError } from '@daffodil/core';

export class DaffCartNotFoundError extends DaffInheritableError implements DaffError {
	public readonly code: string = 'DAFF_CART_NOT_FOUND';

	constructor(message?: string) {
		super(message);
	}
}
