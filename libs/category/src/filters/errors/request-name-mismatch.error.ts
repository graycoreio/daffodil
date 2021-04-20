import {
  DaffInheritableError,
  DaffError,
} from '@daffodil/core';

import { DaffCategoryErrorCodes } from '../../errors/codes.enum';

/**
 * An error thrown when an operation targeting a filter matching one name
 * matches a filter of another name.
 */
export class DaffCategoryFilterRequestNameMismatch extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffCategoryErrorCodes.FILTER_NOT_FOUND;

  constructor(message?: string) {
	  super(message);
  }
}
