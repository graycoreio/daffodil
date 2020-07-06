import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffCartPaymentMethod } from '../../models/cart-payment';
import { DaffCart } from '../../models/cart';
import { DaffCartAddress } from '../../models/cart-address';

/**
 * The interface responsible for managing the selected payment method of a cart.
 */
export interface DaffCartPaymentServiceInterface<
  T extends DaffCartPaymentMethod = DaffCartPaymentMethod,
  V extends DaffCart = DaffCart,
  R extends DaffCartAddress = DaffCartAddress
> {
	/**
	 * Get the currently applied payment method of a cart.
	 */
	get(cartId: V['id']): Observable<T>;

	/**
	 * Update the payment method applied to a cart.
	 */
  update(cartId: V['id'], payment: Partial<T>): Observable<Partial<V>>;

  /**
	 * Update the billing address and payment method applied to a cart.
	 */
	updateWithBilling(cartId: V['id'], payment: Partial<T>, address: Partial<R>): Observable<Partial<V>>;

	/**
	 * Remove the payment method applied to a cart.
	 */
	remove(cartId: V['id']): Observable<void>;
}

export const DaffCartPaymentDriver = new InjectionToken<
	DaffCartPaymentServiceInterface<any, any>
>('DaffCartPaymentDriver');
