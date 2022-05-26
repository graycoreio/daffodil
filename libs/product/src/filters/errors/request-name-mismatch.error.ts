import {
  DaffInheritableError,
  DaffError,
} from '@daffodil/core';

import { DaffProductErrorCodes } from '../../errors/codes.enum';

/**
 * An error thrown when an operation targeting a filter matching one name
 * matches a filter of another name.
 */
export class DaffProductFilterRequestNameMismatch extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffProductErrorCodes.FILTER_REQUEST_NAME_MISMATCH;

  constructor(message?: string) {
	  super(message);
  }
}
