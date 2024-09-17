import { DaffFilterErrorCodes } from './codes.enum';
import {
  DaffError,
  DaffInheritableError,
} from '../../errors/public_api';

/**
 * An error thrown when an operation targeting a filter matches a type unknown
 * to Daffodil.
 */
export class DaffFilterUnknownType extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffFilterErrorCodes.UNKNOWN_FILTER_TYPE;

  constructor(message?: string) {
    super(message);
  }
}
