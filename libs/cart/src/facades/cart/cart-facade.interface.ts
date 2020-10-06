import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { DaffStoreFacade } from '@daffodil/core';

import { DaffCart } from '../../models/cart';
import { DaffCartErrors } from '../../reducers/errors/cart-errors.type';
import { DaffCartOperationType } from '../../reducers/cart-operation-type.enum';
import { DaffCartOrderResult } from '../../models/cart-order-result';
import { DaffCartItem } from '../../models/cart-item';
import { DaffConfigurableCartItemAttribute } from '../../models/configurable-cart-item';
import { DaffCompositeCartItemOption } from '../../models/composite-cart-item';
import { DaffCartTotal } from '../../models/cart-total';
import { DaffCartLoading } from '../../reducers/loading/cart-loading.type';

export interface DaffCartFacadeInterface<
  T extends DaffCart = DaffCart,
	V extends DaffCartOrderResult = DaffCartOrderResult,
	U extends DaffCartItem = DaffCartItem
> extends DaffStoreFacade<Action> {
  resolved$: Observable<boolean>;
  cart$: Observable<T>;

  /**
   * The object that holds all the loading states for cart operations.
   */
  loadingObject$: Observable<DaffCartLoading>;
  /**
   * Whether there is any cart operation in progress.
   * This includes operations specifically for cart subfields.
   */
  featureLoading$: Observable<boolean>;
  /**
   * Whether there is any cart resolve operation in progress.
   * This includes operations for cart subfields.
   * This pertains only to requests that do not mutate data such as "load" or "list".
   */
  featureResolving$: Observable<boolean>;
  /**
   * Whether there is any cart mutate operation in progress.
   * This includes operations for cart subfields.
   * This pertains only to requests that mutate data such as "update".
   */
  featureMutating$: Observable<boolean>;
  /**
   * Whether there is a cart operation in progress.
   * This does not include operations specifically for cart subfields.
   */
  loading$: Observable<boolean>;
  /**
   * Whether there is a cart resolve operation in progress.
   * This does not include operations specifically for cart subfields.
   * This pertains only to requests that do not mutate data such as "load" or "list".
   */
  resolving$: Observable<boolean>;
  /**
   * Whether there is a cart mutate operation in progress.
   * This does not include operations specifically for cart subfields.
   * This pertains only to requests that mutate data such as "update".
   */
  mutating$: Observable<boolean>;
  /**
   * Whether there is a cart billing address operation in progress.
   */
  billingAddressLoading$: Observable<boolean>;
  /**
   * Whether there is a cart billing address resolve operation in progress.
   * This pertains only to requests that do not mutate data such as "load" or "list".
   */
  billingAddressResolving$: Observable<boolean>;
  /**
   * Whether there is a cart billing address mutate operation in progress.
   * This pertains only to requests that mutate data such as "update".
   */
  billingAddressMutating$: Observable<boolean>;
  /**
   * Whether there is a cart shipping address operation in progress.
   */
  shippingAddressLoading$: Observable<boolean>;
  /**
   * Whether there is a cart shipping address resolve operation in progress.
   * This pertains only to requests that do not mutate data such as "load" or "list".
   */
  shippingAddressResolving$: Observable<boolean>;
  /**
   * Whether there is a cart shipping address mutate operation in progress.
   * This pertains only to requests that mutate data such as "update".
   */
  shippingAddressMutating$: Observable<boolean>;
  /**
   * Whether there is a cart shipping information operation in progress.
   */
  shippingInformationLoading$: Observable<boolean>;
  /**
   * Whether there is a cart shipping information resolve operation in progress.
   * This pertains only to requests that do not mutate data such as "load" or "list".
   */
  shippingInformationResolving$: Observable<boolean>;
  /**
   * Whether there is a cart shipping information mutate operation in progress.
   * This pertains only to requests that mutate data such as "update".
   */
  shippingInformationMutating$: Observable<boolean>;
  /**
   * Whether there is a cart shipping methods operation in progress.
   */
  shippingMethodsLoading$: Observable<boolean>;
  /**
   * Whether there is a cart shipping methods resolve operation in progress.
   * This pertains only to requests that do not mutate data such as "load" or "list".
   */
  shippingMethodsResolving$: Observable<boolean>;
  /**
   * Whether there is a cart payment operation in progress.
   */
  paymentLoading$: Observable<boolean>;
  /**
   * Whether there is a cart payment resolve operation in progress.
   * This pertains only to requests that do not mutate data such as "load" or "list".
   */
  paymentResolving$: Observable<boolean>;
  /**
   * Whether there is a cart payment mutate operation in progress.
   * This pertains only to requests that mutate data such as "update".
   */
  paymentMutating$: Observable<boolean>;
  /**
   * Whether there is a cart payment methods operation in progress.
   */
  paymentMethodsLoading$: Observable<boolean>;
  /**
   * Whether there is a cart payment methods resolve operation in progress.
   * This pertains only to requests that do not mutate data such as "load" or "list".
   */
  paymentMethodsResolving$: Observable<boolean>;
  /**
   * Whether there is a cart coupon operation in progress.
   */
  couponLoading$: Observable<boolean>;
  /**
   * Whether there is a cart coupon resolve operation in progress.
   * This pertains only to requests that do not mutate data such as "load" or "list".
   */
  couponResolving$: Observable<boolean>;
  /**
   * Whether there is a cart coupon mutate operation in progress.
   * This pertains only to requests that mutate data such as "update".
   */
  couponMutating$: Observable<boolean>;
  /**
   * Whether there is a cart item operation in progress.
   */
  itemLoading$: Observable<boolean>;
  /**
   * Whether there is a cart item resolve operation in progress.
   * This pertains only to requests that do not mutate data such as "load" or "list".
   */
  itemResolving$: Observable<boolean>;
  /**
   * Whether there is a cart item mutate operation in progress.
   * This pertains only to requests that mutate data such as "update".
   */
  itemMutating$: Observable<boolean>;

  errors$: Observable<DaffCartErrors>;
  cartErrors$: Observable<DaffCartErrors[DaffCartOperationType.Cart]>;
  itemErrors$: Observable<DaffCartErrors[DaffCartOperationType.Item]>;
  billingAddressErrors$: Observable<DaffCartErrors[DaffCartOperationType.BillingAddress]>;
  shippingAddressErrors$: Observable<DaffCartErrors[DaffCartOperationType.ShippingAddress]>;
  shippingInformationErrors$: Observable<DaffCartErrors[DaffCartOperationType.ShippingInformation]>;
  shippingMethodsErrors$: Observable<DaffCartErrors[DaffCartOperationType.ShippingMethods]>;
  paymentErrors$: Observable<DaffCartErrors[DaffCartOperationType.Payment]>;
  paymentMethodsErrors$: Observable<DaffCartErrors[DaffCartOperationType.PaymentMethods]>;
  couponErrors$: Observable<DaffCartErrors[DaffCartOperationType.Coupon]>;

  id$: Observable<DaffCart['id']>;
  subtotal$: Observable<DaffCartTotal['value']>;
  grandTotal$: Observable<DaffCartTotal['value']>;
  subtotalExcludingTax$: Observable<DaffCartTotal['value']>;
  subtotalIncludingTax$: Observable<DaffCartTotal['value']>;
  subtotalWithDiscountExcludingTax$: Observable<DaffCartTotal['value']>;
  subtotalWithDiscountIncludingTax$: Observable<DaffCartTotal['value']>;
  totalDiscount$: Observable<DaffCartTotal['value']>;
  totalTax$: Observable<DaffCartTotal['value']>;
  shippingTotal$: Observable<DaffCartTotal['value']>;
  coupons$: Observable<DaffCart['coupons']>;
  items$: Observable<DaffCart['items']>;
  hasOutOfStockItems$: Observable<boolean>;
  itemDictionary$: Observable<Dictionary<U>>;
  billingAddress$: Observable<DaffCart['billing_address']>;
  shippingAddress$: Observable<DaffCart['shipping_address']>;
  payment$: Observable<DaffCart['payment']>;
  totals$: Observable<DaffCart['totals']>;
  shippingInformation$: Observable<DaffCart['shipping_information']>;
  availableShippingMethods$: Observable<DaffCart['available_shipping_methods']>;
  availablePaymentMethods$: Observable<DaffCart['available_payment_methods']>;
  /**
   * The user-defined platform-agnostic payment identifier that corresponds to the cart's current (platform-specific) payment method.
   * Define the mapping with the `DaffCartPaymentMethodIdMap` injection token.
   * @see DaffCartPaymentMethodIdMap
   */
  paymentId$: Observable<any>;

  isCartEmpty$: Observable<boolean>;
  /**
	 * Whether the cart's shipping address equals the billing address.
	 * Returns false if either address is null or undefined.
   */
	isBillingSameAsShipping$: Observable<boolean>;

  hasBillingAddress$: Observable<boolean>;
  hasShippingAddress$: Observable<boolean>;
  hasShippingMethod$: Observable<boolean>;
  hasPaymentMethod$: Observable<boolean>;
  canPlaceOrder$: Observable<boolean>;

  orderResultLoading$: Observable<boolean>;
	orderResultErrors$: Observable<string[]>;
	orderResult$: Observable<V>;
	orderResultId$: Observable<V['orderId']>;
	orderResultCartId$: Observable<V['cartId']>;
  hasOrderResult$: Observable<boolean>;

	getCartItemDiscountedTotal(itemId: string | number): Observable<number>;
	getConfiguredCartItemAttributes(itemId: string | number): Observable<DaffConfigurableCartItemAttribute[]>;
	getCompositeCartItemOptions(itemId: string | number): Observable<DaffCompositeCartItemOption[]>;
	isCartItemOutOfStock(itemId: DaffCartItem['item_id']): Observable<boolean>;
}
