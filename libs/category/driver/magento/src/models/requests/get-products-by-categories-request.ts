import {
  MagentoProductFilters,
  MagentoSortFieldAction,
} from '@daffodil/product/driver/magento';

export interface MagentoGetProductsByCategoriesRequest {
  filter: MagentoProductFilters;
  search?: string;
  pageSize?: number;
  currentPage?: number;
  sort?: MagentoSortFieldAction;
}
