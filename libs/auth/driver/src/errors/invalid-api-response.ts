import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

import { DaffAuthDriverErrorCodes } from './codes.enum';

export class DaffAuthInvalidAPIResponseError extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffAuthDriverErrorCodes.INVALID_API_RESPONSE;

  constructor(public message: string) {
    super(message);
  }
}
