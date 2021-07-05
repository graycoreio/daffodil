import { DaffCategoryFilterType } from '../category-filter-type';
import { DaffCategoryFilterRangeBase } from '../range/public_api';

/**
 * An interface that describes filters that are a range of numbers; i.e. prices.
 */
export interface DaffCategoryFilterRangeNumeric extends DaffCategoryFilterRangeBase<number> {
	/**
	 * The type of filter.
	 */
  type: DaffCategoryFilterType.RangeNumeric;
}
