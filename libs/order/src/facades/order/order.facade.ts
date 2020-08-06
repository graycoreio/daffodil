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

  _order: DaffOrderEntitySelectors<T>['selectOrder'];
  _totals: DaffOrderEntitySelectors<T>['selectOrderTotals'];
  _appliedCodes: DaffOrderEntitySelectors<T>['selectOrderAppliedCodes'];
  _items: DaffOrderEntitySelectors<T>['selectOrderItems'];
  _addresses: DaffOrderEntitySelectors<T>['selectOrderAddresses'];
  _shipments: DaffOrderEntitySelectors<T>['selectOrderShipments'];
  _payment: DaffOrderEntitySelectors<T>['selectOrderPayment'];
  _invoices: DaffOrderEntitySelectors<T>['selectOrderInvoices'];
  _credits: DaffOrderEntitySelectors<T>['selectOrderCredits'];

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

      selectOrder,
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

    this._order = selectOrder;
    this._totals = selectOrderTotals;
    this._appliedCodes = selectOrderAppliedCodes;
    this._items = selectOrderItems;
    this._addresses = selectOrderAddresses;
    this._shipments = selectOrderShipments;
    this._payment = selectOrderPayment;
    this._invoices = selectOrderInvoices;
    this._credits = selectOrderCredits;
  }

  getOrder$(orderId: T['id']): Observable<T> {
    return this.store.pipe(select(this._order, {id: orderId}))
  }

  getTotals$(orderId: T['id']): Observable<T['totals']> {
    return this.store.pipe(select(this._totals, {id: orderId}))
  }

  getAppliedCodes$(orderId: T['id']): Observable<T['applied_codes']> {
    return this.store.pipe(select(this._appliedCodes, {id: orderId}))
  }

  getItems$(orderId: T['id']): Observable<T['items']> {
    return this.store.pipe(select(this._items, {id: orderId}))
  }

  getAddresses$(orderId: T['id']): Observable<T['addresses']> {
    return this.store.pipe(select(this._addresses, {id: orderId}))
  }

  getShipments$(orderId: T['id']): Observable<T['shipments']> {
    return this.store.pipe(select(this._shipments, {id: orderId}))
  }

  getPayment$(orderId: T['id']): Observable<T['payment']> {
    return this.store.pipe(select(this._payment, {id: orderId}))
  }

  getInvoices$(orderId: T['id']): Observable<T['invoices']> {
    return this.store.pipe(select(this._invoices, {id: orderId}))
  }

  getCredits$(orderId: T['id']): Observable<T['credits']> {
    return this.store.pipe(select(this._credits, {id: orderId}))
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
