import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

import { DaffCartDriverErrorCodes } from './codes.enum';

/**
 * An error thrown when the current user is not authorized for the requested cart.
 */
export class DaffUnauthorizedForCartError extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART;

  constructor(message?: string) {
    super(message);
  }
}
