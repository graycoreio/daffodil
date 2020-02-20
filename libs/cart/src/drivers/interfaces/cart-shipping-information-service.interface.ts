import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffCartShippingRate } from '../../models/cart-shipping-rate';
import { DaffCart } from '../../models/cart';

/**
 * The interface responsible for mediating the interaction of the shipping
 * information of a cart with a given platform.
 */
export interface DaffCartShippingInformationServiceInterface<T extends DaffCartShippingRate, V extends DaffCart>{
	/**
	 * Get the currently selected shipping method of a cart.
	 */
	get(cartId: V['id']): Observable<T>;

	/**
	 * Update the currently selected shipping method of a cart.
	 */
	update(cartId: V['id'], shippingInfo: Partial<T>): Observable<Partial<V>>;

	/**
	 * Remove the currently selected shipping method from a cart.
	 */
	delete(cartId: V['id'], id?: string | number): Observable<Partial<V>>;
}

export const DaffCartShippingInformationDriver = new InjectionToken<
	DaffCartShippingInformationServiceInterface<any, any>
>('DaffCartShippingInformationDriver');
