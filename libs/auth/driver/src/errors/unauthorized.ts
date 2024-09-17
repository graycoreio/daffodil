import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

import { DaffAuthDriverErrorCodes } from './codes.enum';

export class DaffUnauthorizedError extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffAuthDriverErrorCodes.UNAUTHORIZED;

  constructor(public message: string) {
    super(message);
  }
}
