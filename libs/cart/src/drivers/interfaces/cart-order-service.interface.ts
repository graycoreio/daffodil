import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffCart } from '../../models/cart';
import { DaffCartPaymentMethod } from '../../models/cart-payment';
import { DaffCartOrderResult } from '../../models/cart-order-result';

/**
 * The interface responsible for placing an order for the customer's cart.
 */
export interface DaffCartOrderServiceInterface<
  T extends DaffCart = DaffCart,
  V extends DaffCartPaymentMethod = DaffCartPaymentMethod,
  R extends DaffCartOrderResult = DaffCartOrderResult
> {
	/**
	 * Place an order and return the order ID.
	 */
  placeOrder(id: T['id'], payment?: V): Observable<R>;
}

export const DaffCartOrderDriver = new InjectionToken<DaffCartOrderServiceInterface>(
	'DaffCartOrderDriver',
);
