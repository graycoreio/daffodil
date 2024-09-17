import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

import { DaffCartErrorCodes } from '../codes.enum';

/**
 * An error thrown when the cart fails to resolve.
 * This happens when loading the cart ID from storage throws an exception.
 *
 * @inheritdoc
 */
export class DaffCartStorageResolutionError extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffCartErrorCodes.CART_STORAGE_RESOLUTION;

  constructor(message?: string) {
    super(message);
  }
}
