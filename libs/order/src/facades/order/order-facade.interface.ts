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

  getOrder$(orderId: T['id']): Observable<T>;
  getTotals$(orderId: T['id']): Observable<T['totals']>;
  getAppliedCodes$(orderId: T['id']): Observable<T['applied_codes']>;
  getItems$(orderId: T['id']): Observable<T['items']>;
  getBillingAddresses$(orderId: T['id']): Observable<T['billing_addresses']>;
  getShippingAddresses$(orderId: T['id']): Observable<T['shipping_addresses']>;
  getShipments$(orderId: T['id']): Observable<T['shipments']>;
  getPayment$(orderId: T['id']): Observable<T['payment']>;
  getInvoices$(orderId: T['id']): Observable<T['invoices']>;
  getCredits$(orderId: T['id']): Observable<T['credits']>;
}
