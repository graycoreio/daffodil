import { DaffProduct } from '@daffodil/product';

import { DaffCategory } from './category';
import { DaffCategoryPageConfigurationState } from './category-page-configuration-state';
import { DaffCategoryPageMetadata } from './category-page-metadata';
import { DaffGenericCategory } from './generic-category';

export interface DaffGetCategoryResponse<
	V extends DaffGenericCategory<V> = DaffCategory,
	W extends DaffProduct = DaffProduct
> {
  products: W[];
  category: V;
  categoryPageConfigurationState: DaffCategoryPageConfigurationState;
}

export interface DaffGetCategoryResponseReplacement<
	V extends DaffGenericCategory<V> = DaffCategory,
	W extends DaffProduct = DaffProduct
> {
  products: W[];
  category: V;
  categoryPageMetadata: DaffCategoryPageMetadata;
}
