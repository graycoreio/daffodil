import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

import { DaffCartErrorCodes } from '../codes.enum';

/**
 * An error thrown when the cart has failed to resolve or create too many times.
 *
 * @inheritdoc
 */
export class DaffCartExceededMaxResolutionAttemptsError extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffCartErrorCodes.EXCEEDED_MAX_RESOLUTION_ATTEMPTS;

  constructor(message?: string) {
	  super(message);
  }
}
