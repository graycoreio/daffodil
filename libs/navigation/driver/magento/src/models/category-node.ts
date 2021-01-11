import { CategoryProductNode } from './category-product-node';

export interface CategoryNode {
  __typename?: string;
  id: string;
  name?: string;
  include_in_menu: boolean;
  products?: CategoryProductNode;
  level?: number;
  children_count?: number;
	children?: CategoryNode[];
	breadcrumbs?: MagentoBreadcrumb[];
}

export interface MagentoBreadcrumb {
  category_id: number;
  category_name: string;
  category_level: number;
  category_url_key: string;
}
