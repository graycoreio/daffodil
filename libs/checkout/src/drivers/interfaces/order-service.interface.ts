import { Observable } from 'rxjs';

import { Order } from '../../models/order/order';

export interface DaffOrderServiceInterface {
	/**
	 * Place an order with an order id.
	 */
  placeOrder(orderId: string): Observable<Order>;
}
