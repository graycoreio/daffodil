import {
  DaffInheritableError,
  DaffError,
} from '@daffodil/core';

import { DaffCategoryErrorCodes } from '../codes.enum';

export class DaffCategoryUnknownFilterType extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffCategoryErrorCodes.CATEGORY_UNKNOWN_FILTER_TYPE;

  constructor(message?: string) {
	  super(message);
  }
}
