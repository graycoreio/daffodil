import { MagentoProduct } from '@daffodil/product';
import { CategoryPageInfoNode } from './category-page-info-node';

export interface CategoryProductsNode {
  total_count: number;
  page_info: CategoryPageInfoNode;
  items: MagentoProduct[];
}
