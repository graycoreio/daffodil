import { DaffCategoryFilterRangeRequestOption } from '../range/public_api';
import { DaffCategoryFilterRangeType } from './filter-type';

export interface DaffCategoryFilterRangeRequestBase<T> {
	type: DaffCategoryFilterRangeType;
	name: string;
	value: DaffCategoryFilterRangeRequestOption<T>;
}
