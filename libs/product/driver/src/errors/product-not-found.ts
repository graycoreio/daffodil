import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

import { DaffProductDriverErrorCodes } from './codes.enum';

/**
 * An error thrown when the requested product cannot be found.
 */
export class DaffProductNotFoundError extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffProductDriverErrorCodes.PRODUCT_NOT_FOUND;

  constructor(message?: string) {
    super(message);
  }
}
