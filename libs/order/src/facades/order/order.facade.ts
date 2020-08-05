import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action, Store, select } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { DaffOrderReducersState } from '../../reducers/public_api';
import {
  getDaffOrderSelectors
} from '../../selectors/public_api';
import { DaffOrder } from '../../models/order';
import { DaffOrderFacadeInterface } from './order-facade.interface';
import { DaffOrderEntitySelectors } from '../../selectors/order-entities.selector';

@Injectable({
  providedIn: 'root'
})
export class DaffOrderFacade<T extends DaffOrder = DaffOrder> implements DaffOrderFacadeInterface<T> {
  loading$: Observable<boolean>;
  errors$: Observable<string[]>;

  orders$: Observable<T[]>;
  orderIds$: Observable<(string | number)[]>;
  orderCount$: Observable<number>;
  orderEntities$: Observable<Dictionary<T>>;

  placedOrder$: Observable<T>;
  hasPlacedOrder$: Observable<boolean>;

  _totals: DaffOrderEntitySelectors['selectOrderTotals'];
  _appliedCodes: DaffOrderEntitySelectors['selectOrderAppliedCodes'];
  _items: DaffOrderEntitySelectors['selectOrderItems'];
  _addresses: DaffOrderEntitySelectors['selectOrderAddresses'];
  _shipments: DaffOrderEntitySelectors['selectOrderShipments'];
  _payment: DaffOrderEntitySelectors['selectOrderPayment'];
  _invoices: DaffOrderEntitySelectors['selectOrderInvoices'];
  _credits: DaffOrderEntitySelectors['selectOrderCredits'];

  constructor(private store: Store<DaffOrderReducersState<T>>) {
    const {
      selectOrderIds,
      selectOrderEntities,
      selectAllOrders,
      selectOrderTotal,
      selectOrderLoading,
      selectOrderErrors,

      selectPlacedOrder,
      selectHasPlacedOrder,

      selectOrderTotals,
      selectOrderAppliedCodes,
      selectOrderItems,
      selectOrderAddresses,
      selectOrderShipments,
      selectOrderPayment,
      selectOrderInvoices,
      selectOrderCredits,
    } = getDaffOrderSelectors<T>();

    this.loading$ = this.store.pipe(select(selectOrderLoading));
    this.errors$ = this.store.pipe(select(selectOrderErrors));

    this.orders$ = this.store.pipe(select(selectAllOrders));
    this.orderIds$ = this.store.pipe(select(selectOrderIds));
    this.orderCount$ = this.store.pipe(select(selectOrderTotal));
    this.orderEntities$ = this.store.pipe(select(selectOrderEntities));

    this.placedOrder$ = this.store.pipe(select(selectPlacedOrder));
    this.hasPlacedOrder$ = this.store.pipe(select(selectHasPlacedOrder));

    this._totals = selectOrderTotals;
    this._appliedCodes = selectOrderAppliedCodes;
    this._items = selectOrderItems;
    this._addresses = selectOrderAddresses;
    this._shipments = selectOrderShipments;
    this._payment = selectOrderPayment;
    this._invoices = selectOrderInvoices;
    this._credits = selectOrderCredits;
  }

  totals$(orderId: T['id']): Observable<T['totals']> {
    return this.store.pipe(select(this._totals, {id: orderId}))
  }

  appliedCodes$(orderId: T['id']): Observable<T['applied_codes']> {
    return this.store.pipe(select(this._appliedCodes, {id: orderId}))
  }

  items$(orderId: T['id']): Observable<T['items']> {
    return this.store.pipe(select(this._items, {id: orderId}))
  }

  addresses$(orderId: T['id']): Observable<T['addresses']> {
    return this.store.pipe(select(this._addresses, {id: orderId}))
  }

  shipments$(orderId: T['id']): Observable<T['shipments']> {
    return this.store.pipe(select(this._shipments, {id: orderId}))
  }

  payment$(orderId: T['id']): Observable<T['payment']> {
    return this.store.pipe(select(this._payment, {id: orderId}))
  }

  invoices$(orderId: T['id']): Observable<T['invoices']> {
    return this.store.pipe(select(this._invoices, {id: orderId}))
  }

  credits$(orderId: T['id']): Observable<T['credits']> {
    return this.store.pipe(select(this._credits, {id: orderId}))
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
