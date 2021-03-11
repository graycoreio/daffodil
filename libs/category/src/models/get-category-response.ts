import { DaffProduct } from '@daffodil/product';

import { DaffCategory } from './category';
import { DaffCategoryPageConfigurationState } from './category-page-configuration-state';
import { DaffGenericCategory } from './generic-category';
import { DaffCategoryRequest } from './requests/category-request';

export interface DaffGetCategoryResponse<
  T extends DaffCategoryRequest = DaffCategoryRequest,
  V extends DaffGenericCategory<V> = DaffCategory,
  U extends DaffCategoryPageConfigurationState<T> = DaffCategoryPageConfigurationState<T>,
  W extends DaffProduct = DaffProduct
> {
  products: W[];
  category: V;
  categoryPageConfigurationState: U;
}
