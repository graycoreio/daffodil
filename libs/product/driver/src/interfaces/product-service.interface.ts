import { Observable } from 'rxjs';

import { createSingletonInjectionToken } from '@daffodil/core';
import { DaffProduct } from '@daffodil/product';

import { DaffProductDriverResponse } from '../models/response.interface';

export const {
  /**
   * Injection token that serves as a placeholder for any service that implements the DaffProductServiceInterface.
   */
  token: DaffProductDriver,
  /**
   * Provider function for {@link DaffProductDriver}.
   */
  provider: provideDaffProductDriver,
} = createSingletonInjectionToken<DaffProductServiceInterface>('DaffProductDriver');


/**
 * An interface for any Product service drivers.
 */
export interface DaffProductServiceInterface<T extends DaffProduct = DaffProduct> {
  /**
   * Get all products.
   */
  getAll(): Observable<T[]>;
  /**
   * Get best selling products.
   *
   * @deprecated in favor of `@daffodil/related-products/driver` and `@daffodil/upsell-products/driver`. Deprecated in version 0.81.0. Will be removed in version 0.84.0.
   */
  getBestSellers(): Observable<T[]>;
  /**
   * Get a product by Id.
   *
   * @param productId - A string of the product ID.
   */
  get(productId: T['id']): Observable<DaffProductDriverResponse<T>>;
  /**
   * Get a product by URL.
   *
   * @param url - A string of the product URL.
   */
  getByUrl(url: DaffProduct['url']): Observable<DaffProductDriverResponse<T>>;
}
