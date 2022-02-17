import { MagentoSearchCategoryResult } from './category-result.interface';

export interface MagentoSearchForCategoriesResponse {
  categories: {
    items: MagentoSearchCategoryResult[];
  };
}
