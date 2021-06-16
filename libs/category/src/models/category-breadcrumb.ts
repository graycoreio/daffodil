import { DaffLocatable } from '@daffodil/core';

import { DaffCategory } from './category';

/**
 * A breadcrumb describing a traversal down a tree of categories, often found in an array
 * describing the traversal to a particular category within a tree of categories.
 */
export interface DaffCategoryBreadcrumb extends DaffLocatable {
	/**
	 * The id of the associated category.
	 */
  id: DaffCategory['id'];
	/**
	 * A label to display the category name in the UI.
	 */
  name: DaffCategory['name'];
	/**
	 * The number of nodes between this node and the root node for the category tree. For example, the level for a
	 * "Men's Shirts" breadcrumb could be 2 if the breadcrumb tree looked like: "Men" => "Clothing" => "Men's Shirts".
	 */
  level: number;
}
