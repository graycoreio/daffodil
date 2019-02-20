import { Observable } from 'rxjs';
import { Order } from '@daffodil/core';

export interface DaffCheckoutServiceInterface {
  placeOrder(cartId: string): Observable<Order>;
}
