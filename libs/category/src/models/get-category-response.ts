import { DaffProduct } from '@daffodil/product';

import { DaffCategoryPageConfigurationState } from './category-page-configuration-state';
import { DaffGenericCategory } from './generic-category';
import { DaffCategoryRequest } from './requests/category-request';
import { DaffCategory } from './category';

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
