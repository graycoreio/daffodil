import { DaffCategoryFilterType } from '../category-filter-type';

/**
 * A request used to modify the applied status of a {@link DaffCategoryFilterEqual}.
 */
export interface DaffCategoryFilterEqualRequest {
	type: DaffCategoryFilterType.Equal;
	name: string;
	value: string[];
}
