import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffCartShippingRate } from '../../models/cart-shipping-rate';
import { DaffCart } from '../../models/cart';

/**
 * The interface responsible for mediating the interaction of the shipping
 * information of a cart with a given platform.
 */
export interface DaffCartShippingInformationServiceInterface<T extends DaffCartShippingRate>{
	/**
	 * Get the currently selected shipping method of a cart.
	 */
	get(cartId: DaffCart['id']): Observable<T>;

	/**
	 * Update the currently selected shipping method of a cart.
	 */
	update(cartId: DaffCart['id'], shippingInfo: Partial<T>): Observable<T>;

	/**
	 * Remove the currently selected shipping method from a cart.
	 */
	delete(cartId: DaffCart['id'], id?: string | number): Observable<void>;
}

export const DaffCartShippingInformationDriver = new InjectionToken<
	DaffCartShippingInformationServiceInterface<any>
>('DaffCartShippingInformationDriver');
