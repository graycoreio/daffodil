import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

import { DaffCartDriverErrorCodes } from './codes.enum';

/**
 * An error thrown when a cart driver call is sent with a cart identifier
 * that cannot be found by the platform.
 */
export class DaffCartNotFoundError extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffCartDriverErrorCodes.CART_NOT_FOUND;

  constructor(message?: string) {
    super(message);
  }
}
