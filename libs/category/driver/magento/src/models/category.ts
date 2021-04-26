import { MagentoProduct } from '@daffodil/product/driver/magento';

export interface MagentoCategory {
  uid: string;
  url_path: string;
  url_suffix: string;
	name?: string;
	description?: string;
  breadcrumbs?: MagentoBreadcrumb[];
  level?: number;
	children_count?: number;
	products?: {
		items?: MagentoProduct[];
	};
  children?: MagentoCategory[];
}

export interface MagentoBreadcrumb {
  category_uid: MagentoCategory['uid'];
  category_name: MagentoCategory['name'];
  category_level: MagentoCategory['level'];
  category_url_key: string;
}
