import {
  DaffIdentifiable,
  DaffLocatable,
} from '@daffodil/core';

import { DaffCategoryBreadcrumb } from './category-breadcrumb';

/**
 * The DaffGenericCategory broadly describes the model of a Category of products
 * in Daffodil. As Categories are often considered Trees of Categories,
 * this type is a recursive generic.
 */
export interface DaffGenericCategory<T extends DaffGenericCategory<T>> extends DaffLocatable, DaffIdentifiable {
	/**
	 * The name of the category that can be used as a UI label.
	 */
	name: string;
	/**
	 * A description of the category.
	 */
	description?: string;
	/**
	 * A title for the category for usage in the tab title of the webpage.
	 */
	meta_title?: string;
	/**
	 * An overview description of the category for search engine results.
	 */
	meta_description?: string;
	/**
	 * The number of child category nodes under this category.
	 */
  children_count?: number;
	/**
	 * The number of products that belong to the category.
	 */
  total_products?: number;
	/**
	 * The direct child categories of this category.
	 */
  children?: T[];
	/**
	 * The ids for all of the products that belong to the category.
	 */
  product_ids?: string[];
	/**
	 * The breadcrumb trail that leads from this category to its root category.
	 */
  breadcrumbs?: DaffCategoryBreadcrumb[];
}
