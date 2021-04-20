import { Dict } from '@daffodil/core';

import { DaffCategoryFilterOptionBase } from './category-filter-option-base';
import { DaffCategoryFilterTypeReplacement } from './type/category-filter-type';

/**
 * The base type of a category filter. This will replace DaffCategoryFilterBase in a future PR.
 */
export interface DaffCategoryFilterBaseReplacement {
	/**
	 * The end-user facing string that explains the filter e.g. "Color".
	 */
	label: string;

	/**
	 * The name of the filter e.g. "color".
	 */
	name: string;

	/**
	 * The type of the filter. This is used to determine the specific behavior of the filter.
	 */
	type: DaffCategoryFilterTypeReplacement;

	/**
	 * The available options by which to filter a category, e.g. "red", "blue", or "green".
	 * The type of options changes per type of filter.
	 */
	options: Dict<DaffCategoryFilterOptionBase>;
}
