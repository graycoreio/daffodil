import { Dict } from '@daffodil/core';

import { DaffCategoryFilterBase } from '../../category-filter-base';
import { DaffCategoryFilterRangePair } from './pair';

/**
 * A base type for a range-style filter where there is a continuous distribution
 * that can be selected from. E.g. numbers from 0 through 100, letters from "a"
 * through "z", or dates from "1970-01-01" through "1971-01-01".
 *
 * Note that this is the generic base allowing for stricter type implementations.
 */
export interface DaffCategoryFilterRangeBase<T> extends DaffCategoryFilterBase {
	/**
	 * The minimum value for the filter range.
	 */
	min: T;
	/**
	 * The maximum value for the filter range.
	 */
	max: T;
	/**
	 * A dictionary of filter range options.
	 */
	options: Dict<DaffCategoryFilterRangePair<T>>;
}
