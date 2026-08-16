import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

import { DaffCartDriverErrorCodes } from './codes.enum';

/**
 * An error thrown when a cart item's requested quantity
 * exceeds the amount currently in stock.
 */
export class DaffProductInsufficientStockError extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffCartDriverErrorCodes.PRODUCT_INSUFFICIENT_STOCK;

  constructor(message?: string) {
    super(message);
  }
}
