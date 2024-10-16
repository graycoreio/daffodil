import { Observable } from 'rxjs';

import {
  DaffGenericCategory,
  DaffCategory,
  DaffGetCategoryResponse,
  DaffCategoryIdRequest,
  DaffCategoryUrlRequest,
} from '@daffodil/category';
import { createSingletonInjectionToken } from '@daffodil/core';
import { DaffProduct } from '@daffodil/product';

/**
 * An interface for category service drivers.
 */
export interface DaffCategoryServiceInterface<
  V extends DaffGenericCategory<V> = DaffCategory,
  W extends DaffProduct = DaffProduct
> {
  /**
   * Fetch a category by its ID.
   */
  get(categoryRequest: DaffCategoryIdRequest): Observable<DaffGetCategoryResponse<V, W>>;
  /**
   * Fetch a category by its associated URL.
   */
  getByUrl(categoryRequest: DaffCategoryUrlRequest): Observable<DaffGetCategoryResponse<V, W>>;
}

//TODO(damienwebdev): This any generic is necessary until we ship Ivy packages, do not change it.
//See: https://github.com/ng-packagr/ng-packagr/issues/1844
export const {
  token: DaffCategoryDriver,
  /**
   * Provider function for {@link DaffCategoryDriver}.
   */
  provider: provideDaffCategoryDriver,
} = createSingletonInjectionToken<any>('DaffCategoryDriver');
