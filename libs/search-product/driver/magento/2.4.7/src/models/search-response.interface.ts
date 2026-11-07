import { MagentoSearchResultPageInfo } from '@daffodil/driver/magento/2.4.7';
import {
  MagentoAggregation,
  MagentoProduct,
  MagentoProductSortFields,
} from '@daffodil/product/driver/magento/2.4.7';

export interface MagentoSearchForProductsResponse {
  __typename?: string;
  products: {
    __typename?: string;
    items: MagentoProduct[];
    page_info: MagentoSearchResultPageInfo;
    aggregations: MagentoAggregation[];
    sort_fields: MagentoProductSortFields;
    total_count: number;
  };
}
