import { DaffProduct } from '@daffodil/product';

import { DaffCategoryPageConfigurationState } from './category-page-configuration-state';
import { DaffGenericCategory } from './generic-category';
import { DaffCategoryRequest } from './requests/category-request';

export interface DaffGetCategoryResponse<
	T extends DaffCategoryRequest,
	V extends DaffGenericCategory<V>, 
	U extends DaffCategoryPageConfigurationState<T>,
	W extends DaffProduct
> {
  products: W[];
  category: V;
  categoryPageConfigurationState: U;
}
