import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffCartPaymentMethod } from '../../models/cart-payment';
import { DaffCart } from '../../models/cart';

/**
 * The interface responsible for managing the selected payment method of a cart.
 */
export interface DaffCartPaymentServiceInterface<T extends DaffCartPaymentMethod, V extends DaffCart> {
	/**
	 * Get the currently applied payment method of a cart.
	 */
	get(cartId: DaffCart['id']): Observable<T>;

	/**
	 * Update the payment method applied to a cart. 
	 */
	update(cartId: DaffCart['id'], payment: Partial<T>): Observable<Partial<V>>;

	/**
	 * Remove the payment method applied to a cart.
	 */
	remove(cartId: DaffCart['id']): Observable<void>;
}

export const DaffCartPaymentDriver = new InjectionToken<
	DaffCartPaymentServiceInterface<any, any>
>('DaffCartPaymentDriver');
