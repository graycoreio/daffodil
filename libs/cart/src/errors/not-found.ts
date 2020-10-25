import { DaffInheritableError } from '@daffodil/core';

export class DaffCartNotFoundError extends DaffInheritableError {
	/**
	 * The particular error code of the error.
	 */
	public readonly code: string = 'CART_NOT_FOUND';

	constructor(message?: string) {
		super(message);
	}
}
