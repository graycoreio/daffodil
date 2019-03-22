import { Observable } from 'rxjs';

import { Product } from '../../models/product';

/**
 * Interface for any Product service drivers.
 */
export interface DaffProductServiceInterface {
  /**
   * Get all products.
   */
  getAll(): Observable<Product[]>;
  /**
   * Get best selling products.
   */
  getBestSellers(): Observable<Product[]>;
  /**
   * Get a product.
   * 
   * @param productId - A string of the product ID.
   */
  get(productId: string): Observable<Product>;
}
