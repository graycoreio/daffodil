import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

import { DaffAuthorizeNetDriverErrorCodes } from './error-codes.enum';

/**
 * An error thrown when the credit card expiration month is invalid.
 */
export class DaffAuthorizeNetInvalidCCExpMonthError extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffAuthorizeNetDriverErrorCodes.INVALID_CC_EXP_MONTH;

  constructor(public message: string) {
    super(message);
  }
}
