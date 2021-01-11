import { BehaviorSubject } from 'rxjs';
import { Action } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';
import { Injectable } from '@angular/core';

import { DaffStateError } from '@daffodil/core/state';
import { DaffCart, DaffCartTotal, DaffCartItem, DaffCartOrderResult, DaffConfigurableCartItemAttribute, DaffCompositeCartItemOption } from '@daffodil/cart';
import {
	DaffCartFacadeInterface,
	DaffCartErrors,
	DaffCartOperationType,
	DaffCartLoading,
	DaffCartItemStateEnum,
	DaffStatefulCartItem,
  DaffCartResolveState
} from '@daffodil/cart/state';

@Injectable({providedIn: 'root'})
export class MockDaffCartFacade implements DaffCartFacadeInterface {
  cart$: BehaviorSubject<DaffCart> = new BehaviorSubject(null);

  resolved$: BehaviorSubject<DaffCartResolveState> = new BehaviorSubject(DaffCartResolveState.Default);

  loadingObject$: BehaviorSubject<DaffCartLoading> = new BehaviorSubject(null);
  featureLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  featureResolving$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  featureMutating$: BehaviorSubject<boolean> = new BehaviorSubject(false);
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
  itemAdding$: BehaviorSubject<boolean> = new BehaviorSubject(false);
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
  discountTotals$: BehaviorSubject<DaffCartTotal[]> = new BehaviorSubject([]);
  totalTax$: BehaviorSubject<DaffCartTotal['value']> = new BehaviorSubject(null);
  shippingTotal$: BehaviorSubject<DaffCartTotal['value']> = new BehaviorSubject(null);
  coupons$: BehaviorSubject<DaffCart['coupons']> = new BehaviorSubject([]);
  items$: BehaviorSubject<DaffCart['items']> = new BehaviorSubject([]);
  totalItems$: BehaviorSubject<number> = new BehaviorSubject(null);
  hasOutOfStockItems$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  itemDictionary$: BehaviorSubject<Dictionary<DaffStatefulCartItem>> = new BehaviorSubject({});
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
	orderResultErrors$ = new BehaviorSubject<DaffStateError[]>([]);
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

	getCartItemState(itemId: DaffCartItem['item_id']): BehaviorSubject<DaffCartItemStateEnum> {
		return new BehaviorSubject(DaffCartItemStateEnum.Default);
	}

  dispatch(action: Action) {};
}
