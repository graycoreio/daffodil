import {
  DaffError,
  DaffInheritableError,
} from '../../errors/public_api';
import { DaffFilterErrorCodes } from './codes.enum';

/**
 * An error thrown when a lookup for a filter.
 */
export class DaffFilterNotFound extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffFilterErrorCodes.FILTER_NOT_FOUND;

  constructor(message?: string) {
	  super(message);
  }
}
