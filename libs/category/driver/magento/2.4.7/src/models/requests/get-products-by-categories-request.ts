import {
  MagentoProductFilters,
  MagentoSortFieldAction,
} from '@daffodil/product/driver/magento';

export interface MagentoGetCategoryAndProductsRequest {
  productFilter: MagentoProductFilters;
  categoryFilters: MagentoProductFilters;
  search?: string;
  pageSize?: number;
  currentPage?: number;
  sort?: MagentoSortFieldAction;
}
