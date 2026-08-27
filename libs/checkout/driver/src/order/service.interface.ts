import { Observable } from 'rxjs';

import { DaffCart } from '@daffodil/cart';
import { DaffCheckoutOrderResult } from '@daffodil/checkout';

/**
 * The interface responsible for placing an order for the customer's cart.
 */
export interface DaffCheckoutOrderServiceInterface<
  R extends DaffCheckoutOrderResult = DaffCheckoutOrderResult
> {
  /**
   * Place an order and return the order ID.
   */
  placeOrder(id: DaffCart['id']): Observable<R>;
}
