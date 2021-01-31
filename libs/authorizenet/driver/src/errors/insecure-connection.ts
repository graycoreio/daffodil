import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

/**
 * An error thrown when requests are not made over HTTPS.
 */
export class DaffAuthorizeNetInsecureConnectionError extends DaffInheritableError implements DaffError {
  public readonly code: string = 'DAFF_AUTHORIZE_NET_INSECURE_CONNECTION';

  constructor(public message: string) {
    super(message);
  }
}
