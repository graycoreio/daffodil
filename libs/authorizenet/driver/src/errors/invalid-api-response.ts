import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

import { DaffAuthorizeNetDriverErrorCodes } from './error-codes.enum';

/**
 * An error thrown when the platform response is missing key information or malformed in an unrecoverable way.
 */
export class DaffAuthorizeNetInvalidAPIResponseError extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffAuthorizeNetDriverErrorCodes.INVALID_API_RESPONSE;

  constructor(public message: string) {
    super(message);
  }
}
