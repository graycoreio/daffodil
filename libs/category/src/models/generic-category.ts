import { DaffCategoryBreadcrumb } from './category-breadcrumb';

/**
 * The DaffGenericCategory should be used only in extension when defining a new model.
 */
export interface DaffGenericCategory<T extends DaffGenericCategory<T>> {
  id: string;
	name: string;
	description?: string;
  children_count?: number;
  total_products?: number;
  children?: T[];
  product_ids?: string[];
  breadcrumbs?: DaffCategoryBreadcrumb[];
}
