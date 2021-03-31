import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffProduct } from '@daffodil/product';
/**
 * Injection token that serves as a placeholder for any service that implements the DaffProductServiceInterface.
 */
export const DaffProductDriver =
  new InjectionToken<DaffProductServiceInterface>('DaffProductDriver');


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
   */
  getBestSellers(): Observable<T[]>;
  /**
   * Get a product by Id.
   *
   * @param productId - A string of the product ID.
   */
  get(productId: T['id']): Observable<T>;
  /**
   * Get a product by URL.
   *
   * @param url - A string of the product URL.
   */
  getByUrl(url: DaffProduct['url']): Observable<T>;
}
