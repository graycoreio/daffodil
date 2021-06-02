import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

import { DaffCartDriverErrorCodes } from './codes.enum';

/**
 * An error thrown when a cart item's requested quantity
 * exceeds that allowed by the platform for the specified product.
 *
 * @inheritdoc
 */
export class DaffProductOutOfStockError extends DaffInheritableError implements DaffError {
	public readonly code: string = DaffCartDriverErrorCodes.PRODUCT_OUT_OF_STOCK;

	constructor(message?: string) {
	  super(message);
	}
}
