import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

import { DaffCartErrorCodes } from '../codes.enum';

/**
 * An error thrown when the cart fails to resolve.
 *
 * @inheritdoc
 */
export class DaffCartResolutionError extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffCartErrorCodes.CART_RESOLUTION;

  constructor(message?: string) {
    super(message);
  }
}
