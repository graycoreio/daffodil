import { DaffError } from './error.interface';
import { Constructable } from '../constructable/constructable';

/**
 * A type for a dictionary of error codes to Daffodil errors.
 */
export interface DaffErrorCodeMap {
  [x: string]: Constructable<DaffError>;
}
