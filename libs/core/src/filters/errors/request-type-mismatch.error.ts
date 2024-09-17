import { DaffFilterErrorCodes } from './codes.enum';
import {
  DaffError,
  DaffInheritableError,
} from '../../errors/public_api';

/**
 * An error thrown when an operation targeting a filter matching one type
 * matches a filter of another type.
 */
export class DaffFilterRequestTypeMismatch extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffFilterErrorCodes.FILTER_REQUEST_TYPE_MISMATCH;

  constructor(message?: string) {
    super(message);
  }
}
