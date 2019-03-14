import { Observable } from 'rxjs';

import { Order } from '../../models/order/order';

export interface DaffCheckoutServiceInterface {
  placeOrder(cartId: string): Observable<Order>;
}
