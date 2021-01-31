import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

/**
 * An error thrown when the `apiLoginID` value with which the Authorize.net driver has been configured is invalid or missing.
 *
 * @see {@link DaffAuthorizeNetConfig}
 */
export class DaffAuthorizeNetInvalidLoginIdError extends DaffInheritableError implements DaffError {
  public readonly code: string = 'DAFF_AUTHORIZE_NET_INVALID_LOGIN_ID';

  constructor(public message: string) {
    super(message);
  }
}
