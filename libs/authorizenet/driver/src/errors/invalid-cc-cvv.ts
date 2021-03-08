import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

import { DaffAuthorizeNetDriverErrorCodes } from './error-codes.enum';

/**
 * An error thrown when the credit card cvv number is invalid.
 */
export class DaffAuthorizeNetInvalidCCCVVError extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffAuthorizeNetDriverErrorCodes.INVALID_CC_CVV;

  constructor(public message: string) {
    super(message);
  }
}
