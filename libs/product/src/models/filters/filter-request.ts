import { DaffProductFilterEqualRequest } from './type/equal/request';
import { DaffProductFilterRangeNumericRequest } from './type/range-numeric/request';

/**
 * A DaffProductFilterRequest is used to modify the applied or unapplied state of
 * the options of a {@link DaffProductFilter}.
 */
export type DaffProductFilterRequest =
	DaffProductFilterEqualRequest |
	DaffProductFilterRangeNumericRequest;
