import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

import { DaffStoreFacade } from '@daffodil/core';

import { DaffCart } from '../../models/cart';
import { DaffCartErrors } from '../../reducers/errors/cart-errors.type';
import { DaffCartErrorType } from '../../reducers/errors/cart-error-type.enum';
import { DaffCartOrderResult } from '../../models/cart-order-result';

export interface DaffCartFacadeInterface<
  T extends DaffCart = DaffCart,
  V extends DaffCartOrderResult = DaffCartOrderResult
> extends DaffStoreFacade<Action> {
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

  orderResultLoading$: Observable<boolean>;
	orderResultErrors$: Observable<string[]>;
	orderResult$: Observable<V>;
	orderResultId$: Observable<V['id']>;
}
