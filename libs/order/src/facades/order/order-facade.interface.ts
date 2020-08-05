import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { DaffStoreFacade } from '@daffodil/core';

import { DaffOrder } from '../../models/order';

export interface DaffOrderFacadeInterface<T extends DaffOrder = DaffOrder> extends DaffStoreFacade<Action> {
  loading$: Observable<boolean>;
  errors$: Observable<string[]>;
  orders$: Observable<T[]>;
  orderIds$: Observable<(string | number)[]>;
  orderCount$: Observable<number>;
  orderEntities$: Observable<Dictionary<T>>;

  placedOrder$: Observable<T>;
  hasPlacedOrder$: Observable<boolean>;

  totals$(orderId: T['id']): Observable<T['totals']>;
  appliedCodes$(orderId: T['id']): Observable<T['applied_codes']>;
  items$(orderId: T['id']): Observable<T['items']>;
  addresses$(orderId: T['id']): Observable<T['addresses']>;
  shipments$(orderId: T['id']): Observable<T['shipments']>;
  payment$(orderId: T['id']): Observable<T['payment']>;
  invoices$(orderId: T['id']): Observable<T['invoices']>;
  credits$(orderId: T['id']): Observable<T['credits']>;
}
