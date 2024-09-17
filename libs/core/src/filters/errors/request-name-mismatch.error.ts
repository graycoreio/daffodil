import { DaffFilterErrorCodes } from './codes.enum';
import {
  DaffError,
  DaffInheritableError,
} from '../../errors/public_api';

/**
 * An error thrown when an operation targeting a filter matching one name
 * matches a filter of another name.
 */
export class DaffFilterRequestNameMismatch extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffFilterErrorCodes.FILTER_REQUEST_NAME_MISMATCH;

  constructor(message?: string) {
    super(message);
  }
}
