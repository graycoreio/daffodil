import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffCartAddress } from '../../models/cart-address';
import { DaffCart } from '../../models/cart';


/**
 * The interface responsible for managing the address of a cart.
 */
export interface DaffCartAddressServiceInterface<
	T extends DaffCartAddress = DaffCartAddress,
	V extends DaffCart = DaffCart
> {
	/**
	 * Update the billing and shipping address of a cart
	 */
	update(cartId: V['id'], address: Partial<T>): Observable<Partial<V>>;
}

export const DaffCartAddressDriver = new InjectionToken<
	DaffCartAddressServiceInterface<any, any>
>('DaffCartAddressDriver');
