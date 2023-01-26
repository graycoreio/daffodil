import {
  MagentoAggregation,
  MagentoProduct,
  MagentoProductSortFields,
} from '@daffodil/product/driver/magento';
import { MagentoSearchResultPageInfo } from '@daffodil/driver/magento';

import { MagentoCategory } from './category';

export interface MagentoGetCategoryAndProductsResponse {
  categoryList: MagentoCategory[];
  products: {
    items: MagentoProduct[];
    page_info: MagentoSearchResultPageInfo;
    total_count: number;
    aggregations: MagentoAggregation[];
    sort_fields: MagentoProductSortFields;
  };
}
