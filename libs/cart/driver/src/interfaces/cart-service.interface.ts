import { Observable } from 'rxjs';

import { DaffCart } from '@daffodil/cart';
import { createSingletonInjectionToken } from '@daffodil/core';
import { DaffDriverResponse } from '@daffodil/driver';

/**
 * The interface responsible for managing a customer's cart.
 */
export interface DaffCartServiceInterface<T extends DaffCart = DaffCart> {
  /**
   * Retrieve a cart
   */
  get(id: T['id']): Observable<DaffDriverResponse<T>>;

  /**
   * Creates a cart.
   */
  create(): Observable<{id: T['id']}>;

  /**
   * @deprecated Deprecated in version 0.78.0. Will be removed in version 0.81.0.
   * Prefer DaffCartItemServiceInterface.add
   *
   * Add an item to the cart.
   */
  addToCart(productId: string, qty: number): Observable<T>;

  /**
   * Remove all items from a cart.
   */
  clear(id: T['id']): Observable<Partial<T>>;

  /**
   * Merge a guest cart into a customer cart.
   */
  merge(guestCart: T['id'], customerCart?: T['id']): Observable<DaffDriverResponse<T>>;
}

export const {
  token: DaffCartDriver,
  /**
   * Provider function for {@link DaffCartDriver}.
   */
  provider: provideDaffCartDriver,
} = createSingletonInjectionToken<DaffCartServiceInterface>('DaffCartDriver');
