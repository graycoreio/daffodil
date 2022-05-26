import {
  MagentoAggregation,
  MagentoProductPageInfo,
  MagentoProduct,
  MagentoProductSortFields,
} from '@daffodil/product/driver/magento';

export interface MagentoGetProductsResponse {
  products: {
    items: MagentoProduct[];
    total_count: number;
    page_info: MagentoProductPageInfo;
    aggregations: MagentoAggregation[];
    sort_fields: MagentoProductSortFields;
  };
}
