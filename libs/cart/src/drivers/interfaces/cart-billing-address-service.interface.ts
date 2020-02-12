import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffCartAddress } from '../../models/cart-address';
import { DaffCart } from '../../models/cart';


/**
 * The interface responsible for managing the billing address of a cart.
 */
export interface DaffCartBillingAddressServiceInterface<
	V extends DaffCartAddress
> {
	/**
	 * Retrieve the billing address of a cart
	 */
	get(cartId: DaffCart['id']): Observable<V>;

	/**
	 * Update the billing address of a cart
	 */
	update(cartId: DaffCart['id'], address: Partial<V>): Observable<V>;
}

export const DaffCartBillingAddressDriver = new InjectionToken<
	DaffCartBillingAddressServiceInterface<any>
>('DaffCartBillingAddressDriver');
