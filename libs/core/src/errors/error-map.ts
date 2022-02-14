import { Constructable } from '../constructable/constructable';
import { DaffError } from './error.interface';

/**
 * A type for a dictionary of error codes to Daffodil errors.
 */
export interface DaffErrorCodeMap {
	[x: string]: Constructable<DaffError>;
}
