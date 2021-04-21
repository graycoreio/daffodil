import { DaffCategoryFilterType } from '../category-filter-type';

/**
 * A request used to modify the applied status of a {@link DaffCategoryFilterEqual}.
 * This will replace DaffCategoryFilterRequest in a future PR.
 */
export interface DaffCategoryFilterEqualRequest {
	type: DaffCategoryFilterType.Equal;
	name: string;
	value: string[];
}
