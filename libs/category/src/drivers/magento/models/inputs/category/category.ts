export interface MagentoCategory {
  id: string;
  name?: string;
  breadcrumbs?: MagentoBreadcrumb[];
  level?: number;
  children_count?: number;
  children?: MagentoCategory[];
}

export interface MagentoBreadcrumb {
  category_id: number;
  category_name: string;
  category_level: number;
  category_url_key: string;
}
