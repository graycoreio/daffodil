import { DaffCategoryFilterType } from '../category-filter-type';
import { DaffCategoryFilterRangeRequestBase } from '../range/public_api';

/**
 * Describes filter range requests for numbers; i.e. prices.
 */
export interface DaffCategoryFilterRangeNumericRequest extends DaffCategoryFilterRangeRequestBase<number> {
	/**
	 * The filter type.
	 */
	type: DaffCategoryFilterType.RangeNumeric;
}
