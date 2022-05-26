import {
  DaffInheritableError,
  DaffError,
} from '@daffodil/core';

import { DaffProductErrorCodes } from '../../errors/codes.enum';

/**
 * An error thrown when an operation targeting a filter matches a type unknown
 * to Daffodil.
 */
export class DaffProductUnknownFilterType extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffProductErrorCodes.UNKNOWN_FILTER_TYPE;

  constructor(message?: string) {
	  super(message);
  }
}
