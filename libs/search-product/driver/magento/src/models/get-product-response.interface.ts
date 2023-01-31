import { MagentoSearchResultPageInfo } from '@daffodil/driver/magento';
import {
  MagentoAggregation,
  MagentoProduct,
  MagentoProductSortFields,
} from '@daffodil/product/driver/magento';

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
