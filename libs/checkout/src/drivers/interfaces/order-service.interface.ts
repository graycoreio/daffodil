import { Observable } from 'rxjs';

import { Order } from '../../models/order/order';
import { DaffCartProcessRequest } from '../../models/cart-process-request';

/**
 * Place an order with a cart of the provided id.
 */
export interface DaffOrderServiceInterface {
  placeOrder(cartProcessRequest: DaffCartProcessRequest): Observable<Order>;
}
