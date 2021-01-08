import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffCartAddress, DaffCart } from '@daffodil/cart';

/**
 * The interface responsible for managing the shipping address of a cart.
 */
export interface DaffCartShippingAddressServiceInterface<
	T extends DaffCartAddress = DaffCartAddress,
	V extends DaffCart = DaffCart
> {
	/**
	 * Retrieve the shipping address of a cart.
	 */
	get(cartId: V['id']): Observable<T>;

	/**
	 * Update the shipping address of a cart.
	 */
	update(cartId: V['id'], address: Partial<T>): Observable<Partial<V>>;
}

export const DaffCartShippingAddressDriver = new InjectionToken<
	DaffCartShippingAddressServiceInterface
>('DaffCartShippingAddressDriver');
