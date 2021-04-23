import { MagentoProduct } from '@daffodil/product/driver/magento';

export interface MagentoCategory {
  id: number;
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
  category_id: number;
  category_name: string;
  category_level: number;
  category_url_key: string;
}
