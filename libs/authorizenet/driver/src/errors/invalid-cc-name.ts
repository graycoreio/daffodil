import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

import { DaffAuthorizeNetDriverErrorCodes } from './error-codes.enum';

/**
 * An error thrown when the cardholder name is invalid.
 * It should be no more than 64 characters in length.
 */
export class DaffAuthorizeNetInvalidCCNameError extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffAuthorizeNetDriverErrorCodes.INVALID_CC_NAME;

  constructor(public message: string) {
    super(message);
  }
}
