import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

import { DaffAuthDriverErrorCodes } from './codes.enum';

/**
 * An error thrown when registration failed.
 */
export class DaffRegistrationFailedError extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffAuthDriverErrorCodes.REGISTRATION_FAILED;

  constructor(public message: string) {
    super(message);
  }
}
