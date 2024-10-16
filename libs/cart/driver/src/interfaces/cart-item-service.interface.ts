import { Observable } from 'rxjs';

import {
  DaffCartItem,
  DaffCartItemInput,
  DaffCart,
} from '@daffodil/cart';
import { createSingletonInjectionToken } from '@daffodil/core';

/**
 * The interface responsible for managing the items of a cart.
 */
export interface DaffCartItemServiceInterface<
  T extends DaffCart = DaffCart,
  U extends DaffCartItemInput = DaffCartItemInput,
> {
  /**
   * List all of the available items of a cart
   */
  list(cartId: T['id']): Observable<T['items']>;

  /**
   * Get a specific cart item of a cart.
   */
  get(cartId: T['id'], item_id: DaffCartItem['id']): Observable<T['items'][number]>;

  /**
   * Add something to a cart.
   */
  add(id: T['id'], product: U): Observable<Partial<T>>;

  /**
   * Update an existing item in a cart
   */
  update(
    cartId: T['id'],
    itemId: T['items'][number]['id'],
    changes: Partial<T['items'][number]>,
  ): Observable<Partial<T>>;

  /**
   * Remove an item from a cart.
   */
  delete(cartId: T['id'], itemId: T['items'][number]['id']): Observable<Partial<T>>;
}

export const {
  token: DaffCartItemDriver,
  /**
   * Provider function for {@link DaffCartItemDriver}.
   */
  provider: provideDaffCartItemDriver,
} = createSingletonInjectionToken<DaffCartItemServiceInterface>('DaffCartItemDriver');
