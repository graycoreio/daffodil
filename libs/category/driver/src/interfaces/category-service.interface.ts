import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import {
  DaffCategoryRequest,
  DaffGenericCategory,
  DaffCategory,
  DaffCategoryPageConfigurationState,
  DaffGetCategoryResponse,
} from '@daffodil/category';
import { DaffProduct } from '@daffodil/product';

export interface DaffCategoryServiceInterface<
  T extends DaffCategoryRequest = DaffCategoryRequest,
  V extends DaffGenericCategory<V> = DaffCategory,
  U extends DaffCategoryPageConfigurationState<T> = DaffCategoryPageConfigurationState<T>,
  W extends DaffProduct = DaffProduct
> {
  get(categoryRequest: T): Observable<DaffGetCategoryResponse<T, V, U, W>>;
}

//TODO(damienwebdev): This any generic is necessary until we ship Ivy packages, do not change it.
//See: https://github.com/ng-packagr/ng-packagr/issues/1844
export const DaffCategoryDriver = new InjectionToken<any>('DaffCategoryDriver');
