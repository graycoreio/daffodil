import { DaffCategoryFilterType } from './type/category-filter-type';

/**
 * The base type of a category filter.
 */
export interface DaffCategoryFilterBase {
	/**
	 * The end-user facing string that explains the filter e.g. "Color".
	 */
	label: string;

	/**
	 * The name of the filter e.g. "color".
	 */
	name: string;

	/**
	 * The type of the filter, determines the way the filter behaves.
	 */
	type: DaffCategoryFilterType;

	/**
	 * The available options by which to filter a category, e.g. "red", "blue", or "green".
	 * The type of options changes per type of filter.
	 */
	options: { applied: boolean}[];
}
