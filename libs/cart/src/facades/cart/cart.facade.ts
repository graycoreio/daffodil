import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action, Store, select } from '@ngrx/store';

import { DaffStoreFacade } from '@daffodil/core';
import { DaffCart } from '../../models/cart';
import { DaffCartReducersState } from '../../reducers/public_api';
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
  selectCartAvailablePaymentMethods,
  selectItemErrors,
  selectBillingAddressErrors,
  selectShippingAddressErrors,
  selectShippingInformationErrors,
  selectShippingMethodsErrors,
  selectPaymentErrors,
  selectPaymentMethodsErrors,
  selectCartErrorsObject
} from '../../selectors/public_api';
import { DaffCartErrors } from '../../reducers/cart-errors.type';
import { DaffCartErrorType } from '../../reducers/cart-error-type.enum';

@Injectable({
  providedIn: 'root'
})
export class DaffCartFacade implements DaffStoreFacade<Action> {
  loading$: Observable<boolean>;
  cart$: Observable<DaffCart>;

  errors$: Observable<DaffCartErrors>;
  cartErrors$: Observable<DaffCartErrors[DaffCartErrorType.Cart]>;
  itemErrors$: Observable<DaffCartErrors[DaffCartErrorType.Item]>;
  billingAddressErrors$: Observable<DaffCartErrors[DaffCartErrorType.BillingAddress]>;
  shippingAddressErrors$: Observable<DaffCartErrors[DaffCartErrorType.ShippingAddress]>;
  shippingInformationErrors$: Observable<DaffCartErrors[DaffCartErrorType.ShippingInformation]>;
  shippingMethodsErrors$: Observable<DaffCartErrors[DaffCartErrorType.ShippingMethods]>;
  paymentErrors$: Observable<DaffCartErrors[DaffCartErrorType.Payment]>;
  paymentMethodsErrors$: Observable<DaffCartErrors[DaffCartErrorType.PaymentMethods]>;

  id$: Observable<DaffCart['id']>;
  subtotal$: Observable<DaffCart['subtotal']>;
  grandTotal$: Observable<DaffCart['grand_total']>;
  coupons$: Observable<DaffCart['coupons']>;
  items$: Observable<DaffCart['items']>;
  billingAddress$: Observable<DaffCart['billing_address']>;
  shippingAddress$: Observable<DaffCart['shipping_address']>;
  payment$: Observable<DaffCart['payment']>;
  totals$: Observable<DaffCart['totals']>;
  shippingInformation$: Observable<DaffCart['shipping_information']>;
  availableShippingMethods$: Observable<DaffCart['available_shipping_methods']>;
  availablePaymentMethods$: Observable<DaffCart['available_payment_methods']>;

  constructor(private store: Store<DaffCartReducersState>) {
    this.loading$ = this.store.pipe(select(selectCartLoading));
    this.cart$ = this.store.pipe(select(selectCartValue));

    this.errors$ = this.store.pipe(select(selectCartErrorsObject));
    this.cartErrors$ = this.store.pipe(select(selectCartErrors));
    this.itemErrors$ = this.store.pipe(select(selectItemErrors));
    this.billingAddressErrors$ = this.store.pipe(select(selectBillingAddressErrors));
    this.shippingAddressErrors$ = this.store.pipe(select(selectShippingAddressErrors));
    this.shippingInformationErrors$ = this.store.pipe(select(selectShippingInformationErrors));
    this.shippingMethodsErrors$ = this.store.pipe(select(selectShippingMethodsErrors));
    this.paymentErrors$ = this.store.pipe(select(selectPaymentErrors));
    this.paymentMethodsErrors$ = this.store.pipe(select(selectPaymentMethodsErrors));

    this.id$ = this.store.pipe(select(selectCartId));
    this.subtotal$ = this.store.pipe(select(selectCartSubtotal));
    this.grandTotal$ = this.store.pipe(select(selectCartGrandTotal));
    this.coupons$ = this.store.pipe(select(selectCartCoupons));
    this.items$ = this.store.pipe(select(selectCartItems));
    this.billingAddress$ = this.store.pipe(select(selectCartBillingAddress));
    this.shippingAddress$ = this.store.pipe(select(selectCartShippingAddress));
    this.payment$ = this.store.pipe(select(selectCartPayment));
    this.totals$ = this.store.pipe(select(selectCartTotals));
    this.shippingInformation$ = this.store.pipe(select(selectCartShippingInformation));
    this.availableShippingMethods$ = this.store.pipe(select(selectCartAvailableShippingMethods));
    this.availablePaymentMethods$ = this.store.pipe(select(selectCartAvailablePaymentMethods));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
