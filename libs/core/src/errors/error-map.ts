import { Constructable } from '../constructable/constructable';

/**
 * A type for a dictionary of error codes to errors.
 */
export interface DaffErrorCodeMap {
	[x: string]: Constructable<Error>;
}
