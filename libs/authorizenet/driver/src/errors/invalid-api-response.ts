import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

/**
 * An error thrown when the platform response is missing key information or malformed in an unrecoverable way.
 */
export class DaffAuthorizeNetInvalidAPIResponseError extends DaffInheritableError implements DaffError {
  public readonly code: string = 'DAFF_AUTHORIZE_NET_INVALID_API_RESPONSE';

  constructor(public message: string) {
    super(message);
  }
}
