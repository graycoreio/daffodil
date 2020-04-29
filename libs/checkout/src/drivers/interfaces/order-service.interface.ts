import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffOrder } from '../../models/order/order';

export const DaffOrderDriver = new InjectionToken<DaffOrderServiceInterface>('DaffOrderDriver');

/**
 * Query order objects accessible by the logged-in user.
 */
export interface DaffOrderServiceInterface<T extends DaffOrder = DaffOrder> {
  /**
   * Get an order object with the specified order ID.
   */
  get(orderId: T['id']): Observable<T>;

  /**
   * List all order objects for the logged-in user.
   */
  list(): Observable<T[]>;
}
