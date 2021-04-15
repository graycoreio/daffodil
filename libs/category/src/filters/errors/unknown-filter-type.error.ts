import {
  DaffInheritableError,
  DaffError,
} from '@daffodil/core';

import { DaffCategoryErrorCodes } from '../../errors/codes.enum';

/**
 * An error thrown when an operation targeting a filter matches a type unknown
 * to Daffodil.
 */
export class DaffCategoryUnknownFilterType extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffCategoryErrorCodes.UNKNOWN_FILTER_TYPE;

  constructor(message?: string) {
	  super(message);
  }
}
