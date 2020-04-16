import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffCart } from '../../models/cart';
import { DaffCartPaymentMethod } from '../../models/cart-payment';

/**
 * The interface responsible for placing an order for the customer's cart.
 */
export interface DaffCartOrderServiceInterface<
  T extends DaffCart = DaffCart,
  V extends DaffCartPaymentMethod = DaffCartPaymentMethod
> {
	/**
	 * Place an order and return the order ID.
	 */
  placeOrder(id: T['id'], payment?: V): Observable<{id: string | number}>;
}

export const DaffCartOrderDriver = new InjectionToken<DaffCartOrderServiceInterface>(
	'DaffCartOrderDriver',
);
