import { InjectionToken } from '@angular/core';
import { DaffCartPaymentMethod } from '../../models/cart-payment';
import { DaffCart } from '../../models/cart';

/**
 * The interface responsible for managing the selected payment method of a cart.
 */
export interface DaffCartPaymentServiceInterface<T extends DaffCartPaymentMethod> {
	/**
	 * Get the currently applied payment method of a cart.
	 */
	get(cartId: DaffCart['id']): T;

	/**
	 * Update the payment method applied to a cart. 
	 */
	update(cartId: DaffCart['id'], payment: Partial<T>): T;

	/**
	 * Remove the payment method applied to a cart.
	 */
	remove(cartId: DaffCart['id']): void;
}

export const DaffCartPaymentDriver = new InjectionToken<
	DaffCartPaymentServiceInterface<any>
>('DaffCartPaymentDriver');
