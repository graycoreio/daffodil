import { Observable } from 'rxjs';

import { DaffCart } from '@daffodil/cart';
import {
  DaffCollectionRequest,
  createSingleInjectionToken,
} from '@daffodil/core';
import {
  DaffOrder,
  DaffOrderCollection,
} from '@daffodil/order';

export const {
  token: DaffOrderDriver,
  provider: provideDaffOrderDriver,
} = createSingleInjectionToken<DaffOrderServiceInterface>('DaffOrderDriver');

/**
 * Query order objects accessible by the logged-in user.
 */
export interface DaffOrderServiceInterface<
  T extends DaffOrder = DaffOrder,
> {
  /**
   * Get an order object with the specified order ID.
   */
  get(orderId: T['id'], cartId?: DaffCart['id']): Observable<T>;

  /**
   * List all order objects for the logged-in user.
   */
  list(cartId?: DaffCart['id'], request?: DaffCollectionRequest): Observable<DaffOrderCollection<T>>;
}
