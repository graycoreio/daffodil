export interface MagentoCategory {
  __typename?: string;
  uid: string;
  url_path: string;
  url_suffix: string;
  canonical_url: string;
  name?: string;
  description?: string;
  meta_title?: string;
  meta_description?: string;
  breadcrumbs?: MagentoBreadcrumb[];
  level?: number;
  children_count?: number;
  children?: MagentoCategory[];
}

export interface MagentoBreadcrumb {
  category_uid: MagentoCategory['uid'];
  category_name: MagentoCategory['name'];
  category_level: MagentoCategory['level'];
  category_url_path: MagentoCategory['url_path'];
}
