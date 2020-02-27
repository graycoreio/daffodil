import { DaffCategoryBreadcrumb } from './category-breadcrumb';

export interface DaffCategory {
  id: string;
  name: string;
  children_count?: number;
  children?: DaffCategory[];
	breadcrumbs?: DaffCategoryBreadcrumb[];
	total_products?: number;
	productIds?: string[];
}
