import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

import { DaffAuthorizeNetDriverErrorCodes } from './error-codes.enum';

/**
 * An error thrown when the `clientKey` value with which the Authorize.net driver has been configured is invalid or missing.
 *
 * @see {@link DaffAuthorizeNetConfig}
 */
export class DaffAuthorizeNetInvalidClientKeyError extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffAuthorizeNetDriverErrorCodes.INVALID_CLIENT_KEY;

  constructor(public message: string) {
    super(message);
  }
}
