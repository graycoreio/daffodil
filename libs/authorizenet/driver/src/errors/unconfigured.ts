import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

import { DaffAuthorizeNetDriverErrorCodes } from './error-codes.enum';

/**
 * An error thrown when the driver config is missing required information for the driver to function.
 */
export class DaffAuthorizeNetUnconfiguredError extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffAuthorizeNetDriverErrorCodes.UNCONFIGURED;

  constructor(public message: string) {
    super(message);
  }
}
