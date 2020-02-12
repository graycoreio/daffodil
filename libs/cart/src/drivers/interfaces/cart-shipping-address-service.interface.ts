import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffCart } from '../../models/cart';
import { DaffCartAddress } from '../../models/cart-address';

/**
 * The interface responsible for managing the shipping address of a cart.
 */
export interface DaffCartShippingAddressServiceInterface<
	V extends DaffCartAddress
> {
	/**
	 * Retrieve the shipping address of a cart.
	 */
	get(cartId: DaffCart['id']): Observable<V>;

	/**
	 * Update the shipping address of a cart.
	 */
	update(cartId: DaffCart['id'], address: Partial<V>): Observable<V>;
}

export const DaffCartShippingAddressDriver = new InjectionToken<
	DaffCartShippingAddressServiceInterface<any>
>('DaffCartShippingAddressDriver');
