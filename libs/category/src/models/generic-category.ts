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
	name: string;
	description?: string;
	/**
	 * A title for the category for usage in the tab title of the webpage.
	 */
	meta_title?: string;
	/**
	 * An overview description of the category for search engine results.
	 */
	meta_description?: string;
  children_count?: number;
  total_products?: number;
  children?: T[];
  product_ids?: string[];
  breadcrumbs?: DaffCategoryBreadcrumb[];
}
