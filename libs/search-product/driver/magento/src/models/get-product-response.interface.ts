import {
  MagentoAggregation,
  MagentoProduct,
  MagentoProductPageInfo,
  MagentoProductSortFields,
} from '@daffodil/product/driver/magento';

export interface MagentoSearchForProductsResponse {
  __typename?: string;
  products: {
    __typename?: string;
    items: MagentoProduct[];
    page_info: MagentoProductPageInfo;
    aggregations: MagentoAggregation[];
    sort_fields: MagentoProductSortFields;
    total_count: number;
  };
}
