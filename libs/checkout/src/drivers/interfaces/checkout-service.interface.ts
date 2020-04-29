import { Observable } from 'rxjs';

import { DaffOrder } from '../../models/order/order';

export interface DaffCheckoutServiceInterface {
  placeOrder(cartId: string): Observable<DaffOrder>;
}
