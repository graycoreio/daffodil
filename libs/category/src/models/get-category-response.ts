import { DaffProduct } from '@daffodil/product';

import { DaffCategory } from './category';
import { DaffCategoryPageMetadata } from './category-page-metadata';
import { DaffGenericCategory } from './generic-category';

//TODO: move this type to the driver.

/**
 * The response to a call to the {@link DaffCategoryServiceInterface}.
 */
export interface DaffGetCategoryResponse<
	V extends DaffGenericCategory<V> = DaffCategory,
	W extends DaffProduct = DaffProduct
> {
  products: W[];
  category: V;
  categoryPageMetadata: DaffCategoryPageMetadata;
}
