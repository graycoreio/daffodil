import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

import { DaffProductDriverErrorCodes } from './codes.enum';

export class DaffProductInvalidAPIResponseError extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffProductDriverErrorCodes.INVALID_API_RESPONSE;

  constructor(public message: string) {
    super(message);
  }
}
