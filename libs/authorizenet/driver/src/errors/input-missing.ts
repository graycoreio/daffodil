import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

/**
 * An error thrown when required information is missing from the request payload.
 */
export class DaffAuthorizeNetInputMissingError extends DaffInheritableError implements DaffError {
  public readonly code: string = 'DAFF_AUTHORIZE_NET_INPUT_MISSING';

  constructor(public message: string) {
    super(message);
  }
}
