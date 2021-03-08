import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

import { DaffAuthorizeNetDriverErrorCodes } from './error-codes.enum';

/**
 * An error thrown when the credit card expiration date is in the past.
 */
export class DaffAuthorizeNetPastCCExpirationError extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffAuthorizeNetDriverErrorCodes.PAST_CC_EXPIRATION;

  constructor(public message: string) {
    super(message);
  }
}
