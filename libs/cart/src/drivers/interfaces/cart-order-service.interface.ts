import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffCart } from '../../models/cart';
import { DaffCartPaymentMethod } from '../../models/cart-payment';

/**
 * The interface responsible for managing a customer's cart.
 */
export interface DaffCartOrderServiceInterface<
  T extends DaffCart = DaffCart,
  V extends DaffCartPaymentMethod = DaffCartPaymentMethod
> {
	/**
	 * Place an order.
	 */
  placeOrder(id: T['id'], payment?: V): Observable<{id: string | number}>;
}

export const DaffCartOrderDriver = new InjectionToken<DaffCartOrderServiceInterface>(
	'DaffCartOrderDriver',
);
