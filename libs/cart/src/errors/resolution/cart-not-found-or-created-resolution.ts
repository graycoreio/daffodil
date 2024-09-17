import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

import { DaffCartErrorCodes } from '../codes.enum';

/**
 * An error thrown when the cart fails to resolve.
 * This happens when the cart cannot be found and a new cart cannot be created.
 *
 * @inheritdoc
 */
export class DaffCartNotFoundOrCreatedResolutionError extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffCartErrorCodes.CART_NOT_FOUND_OR_CREATED_RESOLUTION;

  constructor(message?: string) {
    super(message);
  }
}
