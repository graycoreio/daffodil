import {
  DaffInheritableError,
  DaffError,
} from '@daffodil/core';

import { DaffCategoryErrorCodes } from '../../errors/codes.enum';

export class DaffCategoryFilterRequestNameMismatch extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffCategoryErrorCodes.CATEGORY_FILTER_REQUEST_NAME_MISMATCH;

  constructor(message?: string) {
	  super(message);
  }
}
