import { DaffProductUnion } from '@daffodil/product';

import { DaffCategory } from './category';
import { DaffCategoryPageConfigurationState } from './category-page-configuration-state';

export interface DaffGetCategoryResponse {
  products: DaffProductUnion[];
  category: DaffCategory;
  categoryPageConfigurationState: DaffCategoryPageConfigurationState;
}
