import {
  MagentoAggregation,
  MagentoProduct,
  MagentoProductSortFields,
  MagentoProductPageInfo,
} from '@daffodil/product/driver/magento';

import { MagentoCategory } from './category';

export interface MagentoCompleteCategoryResponse {
  category: MagentoCategory;
  aggregates: MagentoAggregation[];
  products: MagentoProduct[];
  sort_fields: MagentoProductSortFields;
  page_info: MagentoProductPageInfo;
  total_count: number;
}
