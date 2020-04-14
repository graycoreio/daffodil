import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

import { DaffCart } from '../../models/cart';
import { DaffCartErrors } from '../../reducers/cart-errors.type';
import { DaffCartErrorType } from '../../reducers/cart-error-type.enum';

export interface DaffCartFacadeInterface<T extends DaffCart = DaffCart> {
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

  dispatch(action: Action);
}
