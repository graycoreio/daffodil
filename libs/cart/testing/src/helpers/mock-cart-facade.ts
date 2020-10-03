import { BehaviorSubject } from 'rxjs';
import { Action } from '@ngrx/store';

import {
	DaffCart,
	DaffCartFacadeInterface,
	DaffCartErrors,
	DaffCartOperationType,
  DaffCartOrderResult,
	DaffCartItem,
	DaffConfigurableCartItemAttribute,
	DaffCompositeCartItemOption,
  DaffCartTotal,
  DaffCartLoading
} from '@daffodil/cart';
import { Dictionary } from '@ngrx/entity';

export class MockDaffCartFacade implements DaffCartFacadeInterface {
  resolved$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  cart$: BehaviorSubject<DaffCart> = new BehaviorSubject(null);

  loadingObject$: BehaviorSubject<DaffCartLoading> = new BehaviorSubject(null);
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  resolving$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  mutating$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  billingAddressLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  billingAddressResolving$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  billingAddressMutating$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  shippingAddressLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  shippingAddressResolving$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  shippingAddressMutating$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  shippingInformationLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  shippingInformationResolving$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  shippingInformationMutating$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  shippingMethodsLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  shippingMethodsResolving$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  paymentLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  paymentResolving$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  paymentMutating$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  paymentMethodsLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  paymentMethodsResolving$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  couponLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  couponResolving$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  couponMutating$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  itemLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  itemResolving$: BehaviorSubject<boolean> = new BehaviorSubject(false);
	itemMutating$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  errors$: BehaviorSubject<DaffCartErrors> = new BehaviorSubject(null);
  cartErrors$: BehaviorSubject<DaffCartErrors[DaffCartOperationType.Cart]> = new BehaviorSubject([]);
  itemErrors$: BehaviorSubject<DaffCartErrors[DaffCartOperationType.Item]> = new BehaviorSubject([]);
  billingAddressErrors$: BehaviorSubject<DaffCartErrors[DaffCartOperationType.BillingAddress]> = new BehaviorSubject([]);
  shippingAddressErrors$: BehaviorSubject<DaffCartErrors[DaffCartOperationType.ShippingAddress]> = new BehaviorSubject([]);
  shippingInformationErrors$: BehaviorSubject<DaffCartErrors[DaffCartOperationType.ShippingInformation]> = new BehaviorSubject([]);
  shippingMethodsErrors$: BehaviorSubject<DaffCartErrors[DaffCartOperationType.ShippingMethods]> = new BehaviorSubject([]);
  paymentErrors$: BehaviorSubject<DaffCartErrors[DaffCartOperationType.Payment]> = new BehaviorSubject([]);
  paymentMethodsErrors$: BehaviorSubject<DaffCartErrors[DaffCartOperationType.PaymentMethods]> = new BehaviorSubject([]);
  couponErrors$: BehaviorSubject<DaffCartErrors[DaffCartOperationType.Coupon]> = new BehaviorSubject([]);

  id$: BehaviorSubject<DaffCart['id']> = new BehaviorSubject(null);
  subtotal$: BehaviorSubject<DaffCartTotal['value']> = new BehaviorSubject(null);
  grandTotal$: BehaviorSubject<DaffCartTotal['value']> = new BehaviorSubject(null);
  subtotalExcludingTax$: BehaviorSubject<DaffCartTotal['value']> = new BehaviorSubject(null);
  subtotalIncludingTax$: BehaviorSubject<DaffCartTotal['value']> = new BehaviorSubject(null);
  subtotalWithDiscountExcludingTax$: BehaviorSubject<DaffCartTotal['value']> = new BehaviorSubject(null);
  subtotalWithDiscountIncludingTax$: BehaviorSubject<DaffCartTotal['value']> = new BehaviorSubject(null);
  totalDiscount$: BehaviorSubject<DaffCartTotal['value']> = new BehaviorSubject(null);
  totalTax$: BehaviorSubject<DaffCartTotal['value']> = new BehaviorSubject(null);
  shippingTotal$: BehaviorSubject<DaffCartTotal['value']> = new BehaviorSubject(null);
  coupons$: BehaviorSubject<DaffCart['coupons']> = new BehaviorSubject([]);
  items$: BehaviorSubject<DaffCart['items']> = new BehaviorSubject([]);
  hasOutOfStockItems$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  itemDictionary$: BehaviorSubject<Dictionary<DaffCartItem>> = new BehaviorSubject({});
  billingAddress$: BehaviorSubject<DaffCart['billing_address']> = new BehaviorSubject(null);
  shippingAddress$: BehaviorSubject<DaffCart['shipping_address']> = new BehaviorSubject(null);
  payment$: BehaviorSubject<DaffCart['payment']> = new BehaviorSubject(null);
  totals$: BehaviorSubject<DaffCart['totals']> = new BehaviorSubject([]);
  shippingInformation$: BehaviorSubject<DaffCart['shipping_information']> = new BehaviorSubject(null);
  availableShippingMethods$: BehaviorSubject<DaffCart['available_shipping_methods']> = new BehaviorSubject([]);
  availablePaymentMethods$: BehaviorSubject<DaffCart['available_payment_methods']> = new BehaviorSubject([]);
  paymentId$: BehaviorSubject<any> = new BehaviorSubject(null);

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

	isCartItemOutOfStock(itemId: DaffCartItem['item_id']): BehaviorSubject<boolean> {
		return new BehaviorSubject(false);
	}

  dispatch(action: Action) {};
}
