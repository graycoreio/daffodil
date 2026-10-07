import { MagentoCategory } from '@daffodil/category/driver/magento/2.4.7';

export interface MagentoSearchForCategoriesResponse {
  categories: {
    items: MagentoCategory[];
  };
}
