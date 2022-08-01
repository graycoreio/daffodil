import {
  MagentoAggregation,
  MagentoProductPageInfo,
  MagentoProduct,
  MagentoProductSortFields,
} from '@daffodil/product/driver/magento';

import { MagentoCategory } from './category';

export interface MagentoGetCategoryAndProductsResponse {
  categoryList: MagentoCategory[];
  products: {
    items: MagentoProduct[];
    page_info: MagentoProductPageInfo;
    total_count: number;
    aggregations: MagentoAggregation[];
    sort_fields: MagentoProductSortFields;
  };
}
