import { ID } from '@daffodil/core';

import { DaffCategoryBreadcrumb } from './category-breadcrumb';

/**
 * The DaffGenericCategory broadly describes the model of a Category of products
 * in Daffodil. As Categories are often considered Trees of Categories,
 * this type is a recursive generic.
 */
export interface DaffGenericCategory<T extends DaffGenericCategory<T>> {
  id: ID;
  /**
   * The URI associated with this category.
   */
  uri: string;
	name: string;
	description?: string;
  children_count?: number;
  total_products?: number;
  children?: T[];
  product_ids?: string[];
  breadcrumbs?: DaffCategoryBreadcrumb[];
}
