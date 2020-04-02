import { DaffProductUnion } from '@daffodil/product';

import { DaffCategoryPageConfigurationState } from './category-page-configuration-state';
import { DaffGenericCategory } from './generic-category';

export interface DaffGetCategoryResponse<
	T extends DaffGenericCategory<T>, 
	U extends DaffCategoryPageConfigurationState
> {
  products: DaffProductUnion[];
  category: T;
  categoryPageConfigurationState: U;
}
