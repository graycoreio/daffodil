import { Observable } from 'rxjs';

import { DaffProduct } from '@daffodil/product';

import { DaffGetCategoryResponse } from '../../models/get-category-response';
import { DaffCategoryRequest } from '../../models/requests/category-request';
import { DaffCategoryPageConfigurationState } from '../../models/category-page-configuration-state';
import { DaffGenericCategory } from '../../models/generic-category';
import { DaffCategory } from '../../models/category';

export interface DaffCategoryServiceInterface<
	T extends DaffCategoryRequest = DaffCategoryRequest, 
	V extends DaffGenericCategory<V> = DaffCategory,
	U extends DaffCategoryPageConfigurationState<T> = DaffCategoryPageConfigurationState<T>,
	W extends DaffProduct = DaffProduct
> {
  get(categoryRequest: T): Observable<DaffGetCategoryResponse<T, V, U, W>>;
}
