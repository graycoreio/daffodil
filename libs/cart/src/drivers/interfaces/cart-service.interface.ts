import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffCart } from '../../models/cart';

/**
 * The interface responsible for managing a customer's cart.
 */
export interface DaffCartServiceInterface<T extends DaffCart = DaffCart> {
	/**
	 * Retrieve a cart
	 */
  get(id: T['id']): Observable<T>;

  /**
   * Creates a cart.
   */
  create(): Observable<{id: T['id']}>

	/**
	 * @deprecated
	 * Prefer DaffCartItemServiceInterface.add
	 *
	 * Add an item to the cart.
	 */
	addToCart(productId: string, qty: number): Observable<T>;

	/**
	 * Remove all items from a cart.
	 */
	clear(id: T['id']): Observable<Partial<T>>;
}

export const DaffCartDriver = new InjectionToken<DaffCartServiceInterface<any>>(
	'DaffCartDriver',
);
