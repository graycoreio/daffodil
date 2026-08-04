import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

import { DaffCheckoutDriverErrorCodes } from './codes.enum';

/**
 * An error thrown when the platform's API response is missing required information
 * or malformed in an unrecoverable way.
 */
export class DaffCheckoutInvalidAPIResponseError extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffCheckoutDriverErrorCodes.INVALID_API_RESPONSE;

  constructor(public message: string) {
    super(message);
  }
}
