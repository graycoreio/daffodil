import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

/**
 * An error thrown when the credit card number is invalid.
 */
export class DaffAuthorizeNetInvalidCCNumberError extends DaffInheritableError implements DaffError {
  public readonly code: string = 'DAFF_AUTHORIZE_NET_INVALID_CC_NUMBER';

  constructor(public message: string) {
    super(message);
  }
}
