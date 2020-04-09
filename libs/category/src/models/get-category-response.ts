import { DaffProductUnion } from '@daffodil/product';

import { DaffCategoryPageConfigurationState } from './category-page-configuration-state';
import { DaffGenericCategory } from './generic-category';
import { DaffCategoryRequest } from './requests/category-request';

export interface DaffGetCategoryResponse<
	T extends DaffCategoryRequest,
	V extends DaffGenericCategory<V>, 
	U extends DaffCategoryPageConfigurationState<T>
> {
  products: DaffProductUnion[];
  category: V;
  categoryPageConfigurationState: U;
}
