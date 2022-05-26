import {
  DaffInheritableError,
  DaffError,
} from '@daffodil/core';

import { DaffProductErrorCodes } from '../../errors/codes.enum';

/**
 * An error thrown when a lookup for a filter.
 */
export class DaffProductFilterNotFound extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffProductErrorCodes.FILTER_NOT_FOUND;

  constructor(message?: string) {
	  super(message);
  }
}
