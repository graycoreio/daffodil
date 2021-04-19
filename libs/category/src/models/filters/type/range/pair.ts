import { DaffCategoryFilterOptionBase } from '../../category-filter-option-base';
import { DaffCategoryFilterRangeOption } from './option';

/**
 * An pair of options of the category range filter.
 * Specifies a pair of min and max values.
 */
export interface DaffCategoryFilterRangePair<T> extends DaffCategoryFilterOptionBase {
	applied: true;
	min: DaffCategoryFilterRangeOption<T>;
	max: DaffCategoryFilterRangeOption<T>;
}
