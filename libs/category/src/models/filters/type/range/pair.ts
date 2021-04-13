import { DaffCategoryFilterOptionBase } from '../../category-filter-option-base';
import { DaffCategoryFilterRangeOption } from './option';

export interface DaffCategoryFilterRangePair<T> extends DaffCategoryFilterOptionBase {
	applied: true;
	min: DaffCategoryFilterRangeOption<T>;
	max: DaffCategoryFilterRangeOption<T>;
}
