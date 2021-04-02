import { Dict } from '@daffodil/core';

import { DaffCategoryFilterBase } from '../../category-filter-base';
import { DaffCategoryFilterRangeType } from './filter-type';
import { DaffCategoryFilterRangePair } from './pair';

export interface DaffCategoryFilterRangeBase<T> extends DaffCategoryFilterBase {
	type: DaffCategoryFilterRangeType;
	min: T;
	max: T;
	options: Dict<DaffCategoryFilterRangePair<T>>;
}
