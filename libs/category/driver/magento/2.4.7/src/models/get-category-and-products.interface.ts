import { MagentoSearchResultPageInfo } from '@daffodil/driver/magento/2.4.7';
import {
  MagentoAggregation,
  MagentoProduct,
  MagentoProductSortFields,
} from '@daffodil/product/driver/magento/2.4.7';

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
