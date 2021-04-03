import { DaffCategoryFilterRangeOption } from './option';

export interface DaffCategoryFilterRangePair<T> {
	applied: true;
	min: DaffCategoryFilterRangeOption<T>;
	max: DaffCategoryFilterRangeOption<T>;
}
