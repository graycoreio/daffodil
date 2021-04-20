import { DaffCategoryFilterTypeReplacement } from '../category-filter-type';
import { DaffCategoryFilterRangeRequestBase } from '../range/request-base';

export interface DaffCategoryFilterRangeNumericToggleRequest extends DaffCategoryFilterRangeRequestBase<number> {
	type: DaffCategoryFilterTypeReplacement.RangeNumeric;
}
