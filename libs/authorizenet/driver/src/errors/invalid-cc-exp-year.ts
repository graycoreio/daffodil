import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

import { DaffAuthorizeNetDriverErrorCodes } from './error-codes.enum';

/**
 * An error thrown when the credit card expiration year is invalid.
 */
export class DaffAuthorizeNetInvalidCCExpYearError extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffAuthorizeNetDriverErrorCodes.INVALID_CC_EXP_YEAR;

  constructor(public message: string) {
    super(message);
  }
}
