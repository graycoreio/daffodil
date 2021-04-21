import { DaffCategoryFilterType } from '../category-filter-type';
import { DaffCategoryFilterRangeRequestOption } from '../range/public_api';

/**
 * The base interface for range requests. Range requests have a name and a
 * single defining the min and max values between which to filter.
 */
export interface DaffCategoryFilterRangeRequestBase<T> {
	type: DaffCategoryFilterType;
	name: string;
	value: DaffCategoryFilterRangeRequestOption<T>;
}
