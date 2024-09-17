import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

import { DaffCartDriverErrorCodes } from './codes.enum';

/**
 * An error thrown when the specified region is invalid for the specified address
 * or missing where it is required.
 */
export class DaffInvalidRegionError extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffCartDriverErrorCodes.INVALID_REGION;

  constructor(message?: string) {
    super(message);
  }
}
