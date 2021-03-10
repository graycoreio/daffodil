import { DaffProduct } from '@daffodil/product';

import { DaffCategory } from './category';
import { DaffCategoryPageConfigurationState } from './category-page-configuration-state';
import { DaffGenericCategory } from './generic-category';

export interface DaffGetCategoryResponse<
	V extends DaffGenericCategory<V> = DaffCategory,
	W extends DaffProduct = DaffProduct
> {
  products: W[];
  category: V;
  categoryPageConfigurationState: DaffCategoryPageConfigurationState;
}
