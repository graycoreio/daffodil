import {
  MagentoProductFilters,
  MagentoSortFieldAction,
} from '@daffodil/product/driver/magento/2.4.7';

export interface MagentoGetCategoryAndProductsRequest {
  productFilter: MagentoProductFilters;
  categoryFilters: MagentoProductFilters;
  search?: string;
  pageSize?: number;
  currentPage?: number;
  sort?: MagentoSortFieldAction;
}
