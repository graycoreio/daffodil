import { DaffCategoryFilterTypeReplacement } from '../category-filter-type';
import { DaffCategoryFilterRangeBase } from '../range/public_api';

export interface DaffCategoryFilterRangeNumeric extends DaffCategoryFilterRangeBase<number> {
  type: DaffCategoryFilterTypeReplacement.RangeNumeric;
}
