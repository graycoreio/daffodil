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

export const {
  token: DaffCategoryDriver,
  /**
   * Provider function for {@link DaffCategoryDriver}.
   */
  provider: provideDaffCategoryDriver,
} = createSingletonInjectionToken<DaffCategoryServiceInterface>('DaffCategoryDriver');
