import { BehaviorSubject } from 'rxjs';
import { Action } from '@ngrx/store';

import { 
	DaffCart, 
	DaffCartFacadeInterface,
	DaffCartErrors,
	DaffCartErrorType
} from '@daffodil/cart';

export class MockDaffCartFacade implements DaffCartFacadeInterface {
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(null);
  cart$: BehaviorSubject<DaffCart> = new BehaviorSubject(null);
  errors$: BehaviorSubject<DaffCartErrors> = new BehaviorSubject(null);
  cartErrors$: BehaviorSubject<DaffCartErrors[DaffCartErrorType.Cart]> = new BehaviorSubject([]);
  itemErrors$: BehaviorSubject<DaffCartErrors[DaffCartErrorType.Item]> = new BehaviorSubject([]);
  billingAddressErrors$: BehaviorSubject<DaffCartErrors[DaffCartErrorType.BillingAddress]> = new BehaviorSubject([]);
  shippingAddressErrors$: BehaviorSubject<DaffCartErrors[DaffCartErrorType.ShippingAddress]> = new BehaviorSubject([]);
  shippingInformationErrors$: BehaviorSubject<DaffCartErrors[DaffCartErrorType.ShippingInformation]> = new BehaviorSubject([]);
  shippingMethodsErrors$: BehaviorSubject<DaffCartErrors[DaffCartErrorType.ShippingMethods]> = new BehaviorSubject([]);
  paymentErrors$: BehaviorSubject<DaffCartErrors[DaffCartErrorType.Payment]> = new BehaviorSubject([]);
  paymentMethodsErrors$: BehaviorSubject<DaffCartErrors[DaffCartErrorType.PaymentMethods]> = new BehaviorSubject([]);

  id$: BehaviorSubject<DaffCart['id']> = new BehaviorSubject(null);
  subtotal$: BehaviorSubject<DaffCart['subtotal']> = new BehaviorSubject(null);
  grandTotal$: BehaviorSubject<DaffCart['grand_total']> = new BehaviorSubject(null);
  coupons$: BehaviorSubject<DaffCart['coupons']> = new BehaviorSubject([]);
  items$: BehaviorSubject<DaffCart['items']> = new BehaviorSubject([]);
  billingAddress$: BehaviorSubject<DaffCart['billing_address']> = new BehaviorSubject(null);
  shippingAddress$: BehaviorSubject<DaffCart['shipping_address']> = new BehaviorSubject(null);
  payment$: BehaviorSubject<DaffCart['payment']> = new BehaviorSubject(null);
  totals$: BehaviorSubject<DaffCart['totals']> = new BehaviorSubject([]);
  shippingInformation$: BehaviorSubject<DaffCart['shipping_information']> = new BehaviorSubject(null);
  availableShippingMethods$: BehaviorSubject<DaffCart['available_shipping_methods']> = new BehaviorSubject([]);
  availablePaymentMethods$: BehaviorSubject<DaffCart['available_payment_methods']> = new BehaviorSubject([]);
  isCartEmpty$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  dispatch(action: Action) {};
}
