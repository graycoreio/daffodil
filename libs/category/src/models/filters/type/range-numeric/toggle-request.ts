import { DaffCategoryFilterType } from '../category-filter-type';
import { DaffCategoryFilterRangeRequestBase } from '../range/request-base';

/**
 * An interface to describe toggle requests for ranged numeric filters. For example, the request could be to
 * toggle a price filter for the "10-20" range.
 */
export interface DaffCategoryFilterRangeNumericToggleRequest extends DaffCategoryFilterRangeRequestBase<number> {
	/**
	 * The filter type.
	 */
	type: DaffCategoryFilterType.RangeNumeric;
}
