import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffCartItem } from '../../models/cart-item';
import { DaffCart } from '../../models/cart';
import { DaffCartItemInput } from '../../models/cart-item-input';

/**
 * The interface responsible for managing the items of a cart.
 */
export interface DaffCartItemServiceInterface<
	T extends DaffCartItem,
	U extends DaffCartItemInput,
	V extends DaffCart
> {
	/**
	 * List all of the available items of a cart
	 */
	list(cartId: V['id']): Observable<T[]>;

	/**
	 * Get a specific cart item of a cart.
	 */
	get(cartId: V['id'], item_id: DaffCartItem['item_id']): Observable<T>;

	/**
	 * Add something to a cart.
	 */
	add(id: V['id'], product: U): Observable<Partial<V>>;

	/**
	 * Update an existing item in a cart
	 */
	update(
		cartId: V['id'],
		itemId: T['item_id'],
		changes: Partial<T>,
	): Observable<Partial<V>>;

	/**
	 * Remove an item from a cart.
	 */
	delete(cartId: V['id'], itemId: T['item_id']): Observable<Partial<V>>;
}

export const DaffCartItemDriver = new InjectionToken<
	DaffCartItemServiceInterface<any, any, any>
>('DaffCartItemDriver');
