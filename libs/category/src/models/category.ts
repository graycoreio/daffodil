import { DaffCategoryBreadcrumb } from './category-breadcrumb';

export interface DaffCategory {
  id: string;
	name: string;
	description?: string;
  children_count?: number;
  total_products?: number;
  children?: DaffCategory[];
  product_ids?: string[];
  breadcrumbs?: DaffCategoryBreadcrumb[];
}
