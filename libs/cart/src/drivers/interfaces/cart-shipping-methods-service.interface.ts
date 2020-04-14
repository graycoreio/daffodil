import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffCartShippingRate } from '../../models/cart-shipping-rate';
import { DaffCart } from '../../models/cart';

/**
 * The interface responsible for retrieving the available shipping methods of a cart.
 */
export interface DaffCartShippingMethodsServiceInterface<
	T extends DaffCartShippingRate = DaffCartShippingRate
> {
	/**
	 * List the available shipping methods for a cart.
	 */
	list(cartId: DaffCart['id']): Observable<T[]>;
}

export const DaffCartShippingMethodsDriver = new InjectionToken<
	DaffCartShippingMethodsServiceInterface<any>
>('DaffCartShippingMethodsDriver');
