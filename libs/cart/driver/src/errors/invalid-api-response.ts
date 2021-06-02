import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

import { DaffCartDriverErrorCodes } from './codes.enum';

/**
 * An error thrown when the platform's API response is missing required information
 * or malformed in an unrecoverable way.
 * @inheritdoc
 */
export class DaffCartInvalidAPIResponseError extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffCartDriverErrorCodes.INVALID_API_RESPONSE;

  constructor(public message: string) {
    super(message);
  }
}
