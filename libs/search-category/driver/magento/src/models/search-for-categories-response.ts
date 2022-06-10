import { MagentoCategory } from '@daffodil/category/driver/magento';

export interface MagentoSearchForCategoriesResponse {
  categories: {
    items: MagentoCategory[];
  };
}
