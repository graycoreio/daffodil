import { Dict } from '@daffodil/core';

import { DaffCategoryFilter } from './category-filter';

/**
 * Describes an object that allows a specific category to be filterable.
 */
export interface DaffCategoryFilterable {
	/**
	 * The filters available on the category.
	 */
	filters: Dict<DaffCategoryFilter>;
}
