import { DaffError, DaffInheritableError } from '@daffodil/core';

/**
 * An error thrown when the `clientKey` value with which the Authorize.net driver has been configured is invalid or missing.
 * @see {@link DaffAuthorizeNetConfig}
 */
export class DaffAuthorizenetInvalidClientKeyError extends DaffInheritableError implements DaffError {
  public readonly code: string = 'DAFF_AUTHORIZENET_INVALID_CLIENT_KEY';

	constructor(public message: string) {
		super(message);
	}
}
