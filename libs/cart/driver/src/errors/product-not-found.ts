import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

import { DaffCartDriverErrorCodes } from './codes.enum';

/**
 * An error thrown when an add to cart request is sent
 * for a product that cannot be found.
 * @inheritdoc
 */
export class DaffProductNotFoundError extends DaffInheritableError implements DaffError {
	public readonly code: string = DaffCartDriverErrorCodes.PRODUCT_NOT_FOUND;

	constructor(message?: string) {
	  super(message);
	}
}
