import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

import { DaffCheckoutDriverErrorCodes } from './codes.enum';

/**
 * An error thrown when placing requires an email but one.
 */
export class DaffCheckoutMissingEmailError extends DaffInheritableError implements DaffError {
  public readonly code = DaffCheckoutDriverErrorCodes.EMAIL_MISSING;

  constructor(public message: string) {
    super(message);
  }
}
