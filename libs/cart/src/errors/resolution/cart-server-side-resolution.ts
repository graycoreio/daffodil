import { DaffError, DaffInheritableError } from '@daffodil/core';

import { DaffCartErrorCodes } from '../codes.enum';

/**
 * An error thrown when the cart fails to resolve.
 * This happens when the app in running in a server environment.
 * This is normal and expected in SSR.
 */
export class DaffCartServerSideResolutionError extends DaffInheritableError implements DaffError {
	public readonly code: string = DaffCartErrorCodes.CART_SERVER_SIDE_RESOLUTION

	constructor(message?: string) {
		super(message);
	}
}
