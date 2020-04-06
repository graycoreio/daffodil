import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action, Store, select } from '@ngrx/store';

import { DaffStoreFacade } from '@daffodil/core';
import { DaffCart } from '../../models/cart';
import { DaffCartReducersState } from '../../reducers/public_api';
import { getDaffCartSelectors } from '../../selectors/public_api';
import { DaffCartErrors } from '../../reducers/cart-errors.type';
import { DaffCartErrorType } from '../../reducers/cart-error-type.enum';

@Injectable({
  providedIn: 'root'
})
export class DaffCartFacade<T extends DaffCart> implements DaffStoreFacade<Action> {
  loading$: Observable<boolean>;
  cart$: Observable<T>;

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
  isCartEmpty$: Observable<boolean>;

  constructor(private store: Store<DaffCartReducersState<T>>) {
    this.loading$ = this.store.pipe(select(getDaffCartSelectors<T>().selectCartLoading));
		this.cart$ = this.store.pipe(select(getDaffCartSelectors<T>().selectCartValue));
    this.errors$ = this.store.pipe(select(getDaffCartSelectors<T>().selectCartErrorsObject));
    this.cartErrors$ = this.store.pipe(select(getDaffCartSelectors<T>().selectCartErrors));
    this.itemErrors$ = this.store.pipe(select(getDaffCartSelectors<T>().selectItemErrors));
    this.billingAddressErrors$ = this.store.pipe(select(getDaffCartSelectors<T>().selectBillingAddressErrors));
    this.shippingAddressErrors$ = this.store.pipe(select(getDaffCartSelectors<T>().selectShippingAddressErrors));
    this.shippingInformationErrors$ = this.store.pipe(select(getDaffCartSelectors<T>().selectShippingInformationErrors));
    this.shippingMethodsErrors$ = this.store.pipe(select(getDaffCartSelectors<T>().selectShippingMethodsErrors));
    this.paymentErrors$ = this.store.pipe(select(getDaffCartSelectors<T>().selectPaymentErrors));
    this.paymentMethodsErrors$ = this.store.pipe(select(getDaffCartSelectors<T>().selectPaymentMethodsErrors));

    this.id$ = this.store.pipe(select(getDaffCartSelectors<T>().selectCartId));
    this.subtotal$ = this.store.pipe(select(getDaffCartSelectors<T>().selectCartSubtotal));
    this.grandTotal$ = this.store.pipe(select(getDaffCartSelectors<T>().selectCartGrandTotal));
    this.coupons$ = this.store.pipe(select(getDaffCartSelectors<T>().selectCartCoupons));
    this.items$ = this.store.pipe(select(getDaffCartSelectors<T>().selectCartItems));
    this.billingAddress$ = this.store.pipe(select(getDaffCartSelectors<T>().selectCartBillingAddress));
    this.shippingAddress$ = this.store.pipe(select(getDaffCartSelectors<T>().selectCartShippingAddress));
    this.payment$ = this.store.pipe(select(getDaffCartSelectors<T>().selectCartPayment));
    this.totals$ = this.store.pipe(select(getDaffCartSelectors<T>().selectCartTotals));
    this.shippingInformation$ = this.store.pipe(select(getDaffCartSelectors<T>().selectCartShippingInformation));
    this.availableShippingMethods$ = this.store.pipe(select(getDaffCartSelectors<T>().selectCartAvailableShippingMethods));
    this.availablePaymentMethods$ = this.store.pipe(select(getDaffCartSelectors<T>().selectCartAvailablePaymentMethods));
    this.isCartEmpty$ = this.store.pipe(select(getDaffCartSelectors<T>().selectIsCartEmpty));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
