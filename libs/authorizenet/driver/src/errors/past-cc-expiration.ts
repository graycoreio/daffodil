import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

/**
 * An error thrown when the credit card expiration date is in the past.
 */
export class DaffAuthorizeNetPastCCExpirationError extends DaffInheritableError implements DaffError {
  public readonly code: string = 'DAFF_AUTHORIZE_NET_PAST_CC_EXPIRATION';

  constructor(public message: string) {
    super(message);
  }
}
