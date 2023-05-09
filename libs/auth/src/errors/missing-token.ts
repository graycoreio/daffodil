import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

import { DaffAuthErrorCodes } from './codes.enum';

/**
 * An error thrown when an authenticated action was initiated
 * but an auth token was not present.
 */
export class DaffAuthMissingTokenError extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffAuthErrorCodes.MISSING_TOKEN;

  constructor(public message: string) {
    super(message);
  }
}
