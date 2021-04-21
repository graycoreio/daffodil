import { DaffCategoryFilterType } from '../category-filter-type';
import { DaffCategoryFilterRangeBase } from '../range/public_api';

export interface DaffCategoryFilterRangeNumeric extends DaffCategoryFilterRangeBase<number> {
  type: DaffCategoryFilterType.RangeNumeric;
}
