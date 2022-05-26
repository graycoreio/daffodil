import {
  DaffInheritableError,
  DaffError,
} from '@daffodil/core';

import { DaffProductErrorCodes } from '../../errors/codes.enum';

/**
 * An error thrown when an operation targeting a filter matching one type
 * matches a filter of another type.
 */
export class DaffProductFilterRequestTypeMismatch extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffProductErrorCodes.FILTER_REQUEST_TYPE_MISMATCH;

  constructor(message?: string) {
	  super(message);
  }
}
