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
import { DaffOrderTotal } from '../../models/public_api';

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
  _billingAddresses: DaffOrderEntitySelectors<T>['selectOrderBillingAddresses'];
  _shippingAddresses: DaffOrderEntitySelectors<T>['selectOrderShippingTotalAddresses'];
  _shipments: DaffOrderEntitySelectors<T>['selectOrderShipments'];
  _payment: DaffOrderEntitySelectors<T>['selectOrderPayment'];
  _invoices: DaffOrderEntitySelectors<T>['selectOrderInvoices'];
  _credits: DaffOrderEntitySelectors<T>['selectOrderCredits'];
  _grandTotal: DaffOrderEntitySelectors<T>['selectOrderGrandTotal'];
  _subtotal: DaffOrderEntitySelectors<T>['selectOrderSubtotal'];
  _shipping: DaffOrderEntitySelectors<T>['selectOrderShippingTotal'];
  _discount: DaffOrderEntitySelectors<T>['selectOrderDiscountTotal'];
  _tax: DaffOrderEntitySelectors<T>['selectOrderTaxTotal'];

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
      selectOrderBillingAddresses,
      selectOrderShippingTotalAddresses,
      selectOrderShipments,
      selectOrderPayment,
      selectOrderInvoices,
      selectOrderCredits,

      selectOrderGrandTotal,
      selectOrderSubtotal,
      selectOrderShippingTotal,
      selectOrderDiscountTotal,
      selectOrderTaxTotal,
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
    this._billingAddresses = selectOrderBillingAddresses;
    this._shippingAddresses = selectOrderShippingTotalAddresses;
    this._shipments = selectOrderShipments;
    this._payment = selectOrderPayment;
    this._invoices = selectOrderInvoices;
    this._credits = selectOrderCredits;
    this._grandTotal = selectOrderGrandTotal;
    this._subtotal = selectOrderSubtotal;
    this._shipping = selectOrderShippingTotal;
    this._discount = selectOrderDiscountTotal;
    this._tax = selectOrderTaxTotal;
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

  getBillingAddresses$(orderId: T['id']): Observable<T['billing_addresses']> {
    return this.store.pipe(select(this._billingAddresses, {id: orderId}))
  }

  getShippingAddresses$(orderId: T['id']): Observable<T['shipping_addresses']> {
    return this.store.pipe(select(this._shippingAddresses, {id: orderId}))
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

  getGrandTotal$(orderId: T['id']): Observable<DaffOrderTotal> {
    return this.store.pipe(select(this._grandTotal, {id: orderId}))
  };
  getSubtotal$(orderId: T['id']): Observable<DaffOrderTotal> {
    return this.store.pipe(select(this._subtotal, {id: orderId}))
  };
  getShippingTotal$(orderId: T['id']): Observable<DaffOrderTotal> {
    return this.store.pipe(select(this._shipping, {id: orderId}))
  };
  getDiscountTotal$(orderId: T['id']): Observable<DaffOrderTotal> {
    return this.store.pipe(select(this._discount, {id: orderId}))
  };
  getTaxTotal$(orderId: T['id']): Observable<DaffOrderTotal> {
    return this.store.pipe(select(this._tax, {id: orderId}))
  };

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
