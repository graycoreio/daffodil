import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

import { DaffCartDriverErrorCodes } from './codes.enum';

/**
 * An error thrown when the email is not in the correct format.
 */
export class DaffInvalidEmailError extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffCartDriverErrorCodes.INVALID_EMAIL;

  constructor(message?: string) {
    super(message);
  }
}
