import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action, Store, select } from '@ngrx/store';

import { DaffStoreFacade } from '@daffodil/core';
import { DaffCart } from '../../models/cart';
import { State } from '../../reducers';
import {
  selectCartLoading,
  selectCartValue,
  selectCartErrors,
  selectCartId,
  selectCartSubtotal,
  selectCartGrandTotal,
  selectCartCoupons,
  selectCartItems,
  selectCartBillingAddress,
  selectCartShippingAddress,
  selectCartPayment,
  selectCartTotals,
  selectCartShippingInformation,
  selectCartAvailableShippingMethods,
  selectCartAvailablePaymentMethods
} from '../../selectors';

@Injectable({
  providedIn: 'root'
})
export class DaffCartFacade implements DaffStoreFacade<Action> {
  loading$: Observable<boolean>;
  cart$: Observable<DaffCart>;
  errors$: Observable<string[]>;
  cartId$: Observable<DaffCart['id']>;
  cartSubtotal$: Observable<DaffCart['subtotal']>;
  cartGrandTotal$: Observable<DaffCart['grand_total']>;
  cartCoupons$: Observable<DaffCart['coupons']>;
  cartItems$: Observable<DaffCart['items']>;
  cartBillingAddress$: Observable<DaffCart['billing_address']>;
  cartShippingAddress$: Observable<DaffCart['shipping_address']>;
  cartPayment$: Observable<DaffCart['payment']>;
  cartTotals$: Observable<DaffCart['totals']>;
  cartShippingInformation$: Observable<DaffCart['shipping_information']>;
  cartAvailableShippingMethods$: Observable<DaffCart['available_shipping_methods']>;
  cartAvailablePaymentMethods$: Observable<DaffCart['available_payment_methods']>;

  constructor(private store: Store<State>) {
    this.loading$ = this.store.pipe(select(selectCartLoading));
    this.cart$ = this.store.pipe(select(selectCartValue));
    this.errors$ = this.store.pipe(select(selectCartErrors));
    this.cartId$ = this.store.pipe(select(selectCartId));
    this.cartSubtotal$ = this.store.pipe(select(selectCartSubtotal));
    this.cartGrandTotal$ = this.store.pipe(select(selectCartGrandTotal));
    this.cartCoupons$ = this.store.pipe(select(selectCartCoupons));
    this.cartItems$ = this.store.pipe(select(selectCartItems));
    this.cartBillingAddress$ = this.store.pipe(select(selectCartBillingAddress));
    this.cartShippingAddress$ = this.store.pipe(select(selectCartShippingAddress));
    this.cartPayment$ = this.store.pipe(select(selectCartPayment));
    this.cartTotals$ = this.store.pipe(select(selectCartTotals));
    this.cartShippingInformation$ = this.store.pipe(select(selectCartShippingInformation));
    this.cartAvailableShippingMethods$ = this.store.pipe(select(selectCartAvailableShippingMethods));
    this.cartAvailablePaymentMethods$ = this.store.pipe(select(selectCartAvailablePaymentMethods));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
