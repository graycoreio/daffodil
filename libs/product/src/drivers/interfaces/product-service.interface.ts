import { Observable } from 'rxjs';

import { DaffProduct } from '../../models/product';

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
  get(productId: string): Observable<T>;
}
