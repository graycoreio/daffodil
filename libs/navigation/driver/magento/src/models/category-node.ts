export interface CategoryNode {
  __typename?: string;
  uid: string;
  name?: string;
  include_in_menu: boolean;
  product_count: number;
  level?: number;
  children_count?: number;
	children?: CategoryNode[];
	position?: number;
	breadcrumbs?: MagentoBreadcrumb[];
}

export interface MagentoBreadcrumb {
  category_uid: CategoryNode['uid'];
  category_name: CategoryNode['name'];
  category_level: CategoryNode['level'];
  category_url_key: string;
}
