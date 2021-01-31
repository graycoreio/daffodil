import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

/**
 * An error thrown when the credit card cvv number is invalid.
 */
export class DaffAuthorizeNetInvalidCCCVVError extends DaffInheritableError implements DaffError {
  public readonly code: string = 'DAFF_AUTHORIZE_NET_INVALID_CC_CVV';

  constructor(public message: string) {
    super(message);
  }
}
