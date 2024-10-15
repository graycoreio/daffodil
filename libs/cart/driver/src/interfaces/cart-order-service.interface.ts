import { Observable } from 'rxjs';

import {
  DaffCart,
  DaffCartOrderResult,
} from '@daffodil/cart';
import { createSingletonInjectionToken } from '@daffodil/core';

/**
 * The interface responsible for placing an order for the customer's cart.
 */
export interface DaffCartOrderServiceInterface<
  T extends DaffCart = DaffCart,
  R extends DaffCartOrderResult = DaffCartOrderResult
> {
  /**
   * Place an order and return the order ID.
   */
  placeOrder(id: T['id'], payment?: T['payment']): Observable<R>;
}

export const {
  token: DaffCartOrderDriver,
  provider: provideDaffCartOrderDriver,
} = createSingletonInjectionToken<DaffCartOrderServiceInterface>('DaffCartOrderDriver');
