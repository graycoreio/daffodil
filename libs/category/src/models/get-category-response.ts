import { DaffProductUnion } from '@daffodil/product';

import { DaffCategory } from './category';

export interface DaffGetCategoryResponse {
  products: DaffProductUnion[];
  category: DaffCategory;
}
