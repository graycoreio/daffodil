import { DaffFilterEqualRequest } from './type/equal/request';
import { DaffFilterRangeNumericRequest } from './type/range-numeric/request';

/**
 * A DaffFilterRequest is used to modify the applied or unapplied state of
 * the options of a {@link DaffFilter}.
 */
export type DaffFilterRequest =
	DaffFilterEqualRequest |
	DaffFilterRangeNumericRequest;
