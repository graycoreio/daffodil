import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

import { DaffDriverErrorCodes } from './codes';

export class DaffBadInputError extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffDriverErrorCodes.BAD_INPUT;

  constructor(public message: string) {
    super(message);
  }
}
