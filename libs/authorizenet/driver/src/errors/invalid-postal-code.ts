import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

import { DaffAuthorizeNetDriverErrorCodes } from './error-codes.enum';

/**
 * An error thrown when the postal code is invalid.
 * It should be no more than 20 characters in length.
 */
export class DaffAuthorizeNetInvalidPostalCodeError extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffAuthorizeNetDriverErrorCodes.INVALID_POSTAL_CODE;

  constructor(public message: string) {
    super(message);
  }
}
