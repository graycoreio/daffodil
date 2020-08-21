import { BehaviorSubject } from 'rxjs';
import { Action } from '@ngrx/store';

import {
	DaffCart,
	DaffCartFacadeInterface,
	DaffCartErrors,
	DaffCartErrorType,
  DaffCartOrderResult,
	DaffCartItem,
	DaffConfigurableCartItemAttribute,
	DaffCompositeCartItemOption
} from '@daffodil/cart';
import { Dictionary } from '@ngrx/entity';

export class MockDaffCartFacade implements DaffCartFacadeInterface {
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  resolved$: BehaviorSubject<boolean> = new BehaviorSubject(false);
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
  couponErrors$: BehaviorSubject<DaffCartErrors[DaffCartErrorType.Coupon]> = new BehaviorSubject([]);

  id$: BehaviorSubject<DaffCart['id']> = new BehaviorSubject(null);
  subtotal$: BehaviorSubject<DaffCart['subtotal']> = new BehaviorSubject(null);
  grandTotal$: BehaviorSubject<DaffCart['grand_total']> = new BehaviorSubject(null);
  coupons$: BehaviorSubject<DaffCart['coupons']> = new BehaviorSubject([]);
  items$: BehaviorSubject<DaffCart['items']> = new BehaviorSubject([]);
  itemDictionary$: BehaviorSubject<Dictionary<DaffCartItem>> = new BehaviorSubject({});
  billingAddress$: BehaviorSubject<DaffCart['billing_address']> = new BehaviorSubject(null);
  shippingAddress$: BehaviorSubject<DaffCart['shipping_address']> = new BehaviorSubject(null);
  payment$: BehaviorSubject<DaffCart['payment']> = new BehaviorSubject(null);
  totals$: BehaviorSubject<DaffCart['totals']> = new BehaviorSubject([]);
  shippingInformation$: BehaviorSubject<DaffCart['shipping_information']> = new BehaviorSubject(null);
  availableShippingMethods$: BehaviorSubject<DaffCart['available_shipping_methods']> = new BehaviorSubject([]);
  availablePaymentMethods$: BehaviorSubject<DaffCart['available_payment_methods']> = new BehaviorSubject([]);

  isCartEmpty$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  isBillingSameAsShipping$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  hasBillingAddress$ = new BehaviorSubject(false);
  hasShippingAddress$ = new BehaviorSubject(false);
  hasShippingMethod$ = new BehaviorSubject(false);
  hasPaymentMethod$ = new BehaviorSubject(false);
  canPlaceOrder$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  orderResultLoading$ = new BehaviorSubject<boolean>(false);
	orderResultErrors$ = new BehaviorSubject<string[]>([]);
	orderResult$ = new BehaviorSubject<DaffCartOrderResult>({
    id: null,
    orderId: null,
    cartId: null,
  });
	orderResultId$ = new BehaviorSubject<DaffCartOrderResult['orderId']>(null);
	orderResultCartId$ = new BehaviorSubject<DaffCartOrderResult['cartId']>(null);
	hasOrderResult$ = new BehaviorSubject<boolean>(false);

	getCartItemDiscountedTotal(itemId: string | number): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	}

	getConfiguredCartItemAttributes(itemId: string | number): BehaviorSubject<DaffConfigurableCartItemAttribute[]> {
		return new BehaviorSubject([]);
	}

	getCompositeCartItemOptions(itemId: string | number): BehaviorSubject<DaffCompositeCartItemOption[]> {
		return new BehaviorSubject([]);
	}

	isCartItemOutOfStock(itemId: string | number): BehaviorSubject<boolean> {
		return new BehaviorSubject(false);
	}

  dispatch(action: Action) {};
}
