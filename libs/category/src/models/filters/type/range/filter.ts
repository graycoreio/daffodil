import { DaffCategoryFilterBase } from '../../category-filter-base';
import { DaffCategoryFilterType } from '../category-filter-type';
import { DaffCategoryFilterRangePair } from './pair';

export interface DaffCategoryRangeFilter extends DaffCategoryFilterBase {
	type: DaffCategoryFilterType.Range;
	min: string;
	max: string;
	options: DaffCategoryFilterRangePair[];
}
