import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

import { DaffCartDriverErrorCodes } from './codes.enum';

/**
 * An error thrown when a cart item's requested quantity
 * exceeds the maximum allowed by the platform.
 */
export class DaffCartItemExceedsMaxQtyError extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffCartDriverErrorCodes.ITEM_EXCEEDS_MAX_QTY;

  constructor(message?: string) {
    super(message);
  }
}
