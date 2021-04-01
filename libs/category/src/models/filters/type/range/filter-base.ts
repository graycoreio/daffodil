import { Dict } from '@daffodil/core';

import { DaffCategoryFilterBase } from '../../category-filter-base';
import { DaffCategoryFilterType } from '../category-filter-type';
import { DaffCategoryFilterRangePair } from './pair';

export interface DaffCategoryFilterRangeBase<T> extends DaffCategoryFilterBase {
	type: DaffCategoryFilterType.RangeNumeric;
	min: T;
	max: T;
	options: Dict<DaffCategoryFilterRangePair<T>>;
}
