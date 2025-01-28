import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStoreFacade } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';

/**
 * A facade for getting state about a particular product.
 */
export interface DaffProductFacadeInterface<T extends DaffProduct = DaffProduct> extends DaffStoreFacade<Action> {
  /**
   * Get a product.
   *
   * @param id a product id
   */
  getProduct(id: T['id']): Observable<T>;

  /**
   * Get the original price for a product.
   *
   * @param id a product id
   */
  getPrice(id: T['id']): Observable<number>;

  /**
   * Whether a particular product has a discount.
   *
   * @param id a product id
   */
  hasDiscount(id: T['id']): Observable<boolean>;

  /**
   * Get the discount amount of a product.
   *
   * @param id a product id
   */
  getDiscountAmount(id: T['id']): Observable<number>;

  /**
   * Get the discounted price for a product.
   *
   * @param id a product id
   */
  getDiscountedPrice(id: T['id']): Observable<number>;

  /**
   * Get the discount percent of a product.
   *
   * @param id a product id
   */
  getDiscountPercent(id: T['id']): Observable<number>;

  /**
   * Whether a product is out of stock.
   *
   * @param id a product id
   */
  isOutOfStock(id: T['id']): Observable<boolean>;
}
