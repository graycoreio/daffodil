import { Injectable } from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import {
  Action,
  Store,
  select,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';
import {
  DaffOrder,
  DaffOrderTotal,
} from '@daffodil/order';

import { DaffOrderFacadeInterface } from './order-facade.interface';
import { DaffOrderStateRootSlice } from '../../reducers/public_api';
import { DaffOrderEntitySelectors } from '../../selectors/order-entities.selector';
import { getDaffOrderSelectors } from '../../selectors/public_api';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffOrderFacade<T extends DaffOrder = DaffOrder> implements DaffOrderFacadeInterface<T> {
  loading$: Observable<boolean>;
  errors$: Observable<DaffStateError[]>;
  loadingState$: Observable<DaffState>;
  resolving$: Observable<boolean>;
  mutating$: Observable<boolean>;
  hasErrors$: Observable<boolean>;

  orders$: Observable<T[]>;
  orderIds$: Observable<T['id'][]>;
  orderCount$: Observable<number>;
  orderEntities$: Observable<Dictionary<T>>;

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
  _hasDiscount: DaffOrderEntitySelectors<T>['selectOrderHasDiscount'];
  _tax: DaffOrderEntitySelectors<T>['selectOrderTaxTotal'];

  constructor(private store: Store<DaffOrderStateRootSlice<T>>) {
    const {
      selectOrderIds,
      selectOrderEntities,
      selectOrders,
      selectOrderTotal,
      selectLoading,
      selectErrors,
      selectHasErrors,
      selectMutating,
      selectResolving,
      selectLoadingState,

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
      selectOrderHasDiscount,
      selectOrderTaxTotal,
    } = getDaffOrderSelectors<T>();

    this.loading$ = this.store.pipe(select(selectLoading));
    this.errors$ = this.store.pipe(select(selectErrors));
    this.loadingState$ = this.store.pipe(select(selectLoadingState));
    this.resolving$ = this.store.pipe(select(selectResolving));
    this.mutating$ = this.store.pipe(select(selectMutating));
    this.hasErrors$ = this.store.pipe(select(selectHasErrors));

    this.orders$ = this.store.pipe(select(selectOrders));
    this.orderIds$ = this.store.pipe(select(selectOrderIds));
    this.orderCount$ = this.store.pipe(select(selectOrderTotal));
    this.orderEntities$ = this.store.pipe(select(selectOrderEntities));

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
    this._hasDiscount = selectOrderHasDiscount;
    this._tax = selectOrderTaxTotal;
  }

  getOrder$(orderId: T['id']): Observable<T> {
    return this.store.pipe(select(this._order(orderId)));
  }

  getTotals$(orderId: T['id']): Observable<T['totals']> {
    return this.store.pipe(select(this._totals(orderId)));
  }

  getAppliedCodes$(orderId: T['id']): Observable<T['applied_codes']> {
    return this.store.pipe(select(this._appliedCodes(orderId)));
  }

  getItems$(orderId: T['id']): Observable<T['items']> {
    return this.store.pipe(select(this._items(orderId)));
  }

  getBillingAddresses$(orderId: T['id']): Observable<T['billing_addresses']> {
    return this.store.pipe(select(this._billingAddresses(orderId)));
  }

  getShippingAddresses$(orderId: T['id']): Observable<T['shipping_addresses']> {
    return this.store.pipe(select(this._shippingAddresses(orderId)));
  }

  getShipments$(orderId: T['id']): Observable<T['shipments']> {
    return this.store.pipe(select(this._shipments(orderId)));
  }

  getPayment$(orderId: T['id']): Observable<T['payment']> {
    return this.store.pipe(select(this._payment(orderId)));
  }

  getInvoices$(orderId: T['id']): Observable<T['invoices']> {
    return this.store.pipe(select(this._invoices(orderId)));
  }

  getCredits$(orderId: T['id']): Observable<T['credits']> {
    return this.store.pipe(select(this._credits(orderId)));
  }

  getGrandTotal$(orderId: T['id']): Observable<DaffOrderTotal> {
    return this.store.pipe(select(this._grandTotal(orderId)));
  };
  getSubtotal$(orderId: T['id']): Observable<DaffOrderTotal> {
    return this.store.pipe(select(this._subtotal(orderId)));
  };
  getShippingTotal$(orderId: T['id']): Observable<DaffOrderTotal> {
    return this.store.pipe(select(this._shipping(orderId)));
  };
  getDiscountTotal$(orderId: T['id']): Observable<DaffOrderTotal> {
    return this.store.pipe(select(this._discount(orderId)));
  };
  hasDiscount$(orderId: T['id']): Observable<boolean> {
    return this.store.pipe(select(this._hasDiscount(orderId)));
  };
  getTaxTotal$(orderId: T['id']): Observable<DaffOrderTotal> {
    return this.store.pipe(select(this._tax(orderId)));
  };

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
