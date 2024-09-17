import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

import { DaffAuthDriverErrorCodes } from './codes.enum';

export class DaffAuthenticationFailedError extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffAuthDriverErrorCodes.AUTHENTICATION_FAILED;

  constructor(public message: string) {
    super(message);
  }
}
