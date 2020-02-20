import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffCartAddress } from '../../models/cart-address';
import { DaffCart } from '../../models/cart';


/**
 * The interface responsible for managing the billing address of a cart.
 */
export interface DaffCartBillingAddressServiceInterface<
	T extends DaffCartAddress,
	V extends DaffCart
> {
	/**
	 * Retrieve the billing address of a cart
	 */
	get(cartId: V['id']): Observable<T>;

	/**
	 * Update the billing address of a cart
	 */
	update(cartId: V['id'], address: Partial<T>): Observable<Partial<V>>;
}

export const DaffCartBillingAddressDriver = new InjectionToken<
	DaffCartBillingAddressServiceInterface<any, any>
>('DaffCartBillingAddressDriver');
