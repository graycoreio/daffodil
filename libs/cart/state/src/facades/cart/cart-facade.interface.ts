import { Dictionary } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  DaffCart,
  DaffCartOrderResult,
  DaffCartTotal,
  DaffConfigurableCartItemAttribute,
  DaffCompositeCartItemOption,
  DaffCartItemDiscount,
} from '@daffodil/cart';
import {
  DaffStateError,
  DaffStoreFacade,
} from '@daffodil/core/state';

import {
  DaffCartItemStateEnum,
  DaffStatefulCartItem,
} from '../../models/stateful-cart-item';
import { DaffCartOperationType } from '../../reducers/cart-operation-type.enum';
import { DaffCartErrors } from '../../reducers/errors/cart-errors.type';
import { DaffCartLoading } from '../../reducers/loading/cart-loading.type';
import { DaffCartResolveState } from '../../reducers/public_api';

export interface DaffCartFacadeInterface<
  T extends DaffCart = DaffCart,
	V extends DaffCartOrderResult = DaffCartOrderResult,
	U extends DaffStatefulCartItem = DaffStatefulCartItem
> extends DaffStoreFacade<Action> {
  cart$: Observable<T>;

  resolved$: Observable<DaffCartResolveState>;

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
   * Whether there is a cart item add operation in progress.
   */
  itemAdding$: Observable<boolean>;
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

  id$: Observable<T['id']>;
  subtotal$: Observable<DaffCartTotal['value']>;
  grandTotal$: Observable<DaffCartTotal['value']>;
  subtotalExcludingTax$: Observable<DaffCartTotal['value']>;
  subtotalIncludingTax$: Observable<DaffCartTotal['value']>;
  subtotalWithDiscountExcludingTax$: Observable<DaffCartTotal['value']>;
  subtotalWithDiscountIncludingTax$: Observable<DaffCartTotal['value']>;
  discountTotals$: Observable<DaffCartTotal[]>;
  totalTax$: Observable<DaffCartTotal['value']>;
  shippingTotal$: Observable<DaffCartTotal['value']>;
  coupons$: Observable<T['coupons']>;
	items$: Observable<T['items']>;
	/**
	 * The total number of cart items, taking into account the quantity of each cart item.
	 */
  totalItems$: Observable<number>;
  hasOutOfStockItems$: Observable<boolean>;
  /**
   * All cart items that are out of stock.
   */
  outOfStockItems$: Observable<U[]>;
  /**
   * All cart items that are in stock.
   */
  inStockItems$: Observable<U[]>;
  itemDictionary$: Observable<Dictionary<U>>;
  billingAddress$: Observable<T['billing_address']>;
  shippingAddress$: Observable<T['shipping_address']>;
  payment$: Observable<T['payment']>;
  totals$: Observable<T['totals']>;
  shippingInformation$: Observable<T['shipping_information']>;
  availableShippingMethods$: Observable<T['available_shipping_methods']>;
  availablePaymentMethods$: Observable<T['available_payment_methods']>;
  /**
   * The user-defined platform-agnostic payment identifier that corresponds to the cart's current (platform-specific) payment method.
   * Define the mapping with the `DaffCartPaymentMethodIdMap` injection token.
   *
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
	orderResultErrors$: Observable<DaffStateError[]>;
	orderResult$: Observable<V>;
	orderResultId$: Observable<V['orderId']>;
	orderResultCartId$: Observable<V['cartId']>;
  hasOrderResult$: Observable<boolean>;

	getConfiguredCartItemAttributes(itemId: U['id']): Observable<DaffConfigurableCartItemAttribute[]>;
	getCompositeCartItemOptions(itemId: U['id']): Observable<DaffCompositeCartItemOption[]>;
	isCartItemOutOfStock(itemId: U['id']): Observable<boolean>;
	/**
	 * The state of a cart item.
	 */
  getCartItemState(itemId: U['id']): Observable<DaffCartItemStateEnum>;
  /**
   * Selects the specified item's price.
   * Zero by default.
   * This includes any discounts and sales that apply to the product or category.
   * This excludes cart discounts.
   */
	getCartItemPrice(itemId: U['id']): Observable<number>;
  /**
   * Selects the specified item's quantity.
   * Zero by default.
   */
	getCartItemQuantity(itemId: U['id']): Observable<number>;
  /**
   * Selects the specified item's row total.
   * Zero by default.
   * This includes any discounts and sales that apply to the product or category.
   * This excludes cart discounts.
   */
	getCartItemRowTotal(itemId: U['id']): Observable<number>;
  /**
   * Selects the specified item's array of cart (not product) discounts.
   */
	getCartItemDiscounts(itemId: U['id']): Observable<DaffCartItemDiscount[]>;
  /**
   * Selects the specified item's sum of all cart (not product) discounts for the entire row.
   * Zero by default.
   */
	getCartItemTotalDiscount(itemId: U['id']): Observable<number>;
  /**
   * Gets the specified item's errors.
   */
	getCartItemErrors(itemId: U['id']): Observable<DaffStateError[]>;
}
