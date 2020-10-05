import {
  createSelector,
  MemoizedSelector,
	MemoizedSelectorWithProps,
  DefaultProjectorFn
} from '@ngrx/store';

import { DaffLoadingState, daffSubtract } from '@daffodil/core';
import { daffComparePersonalAddresses } from '@daffodil/geography';

import { getDaffCartFeatureSelector } from '../cart-feature.selector';
import { DaffCart } from '../../models/cart';
import { DaffCartReducerState, DaffCartReducersState, DaffCartOperationType } from '../../reducers/public_api';
import { DaffCartOrderResult } from '../../models/cart-order-result';
import { DaffCartItem } from '../../models/cart-item';
import { DaffCartTotalTypeEnum, DaffCartTotal } from '../../models/cart-total';

export interface DaffCartStateMemoizedSelectors<
  T extends DaffCart = DaffCart
> {
	selectCartState: MemoizedSelector<object, DaffCartReducerState<T>>;
	selectCartValue: MemoizedSelector<object, T>;
  selectCartResolved: MemoizedSelector<object, boolean>;

  /**
   * The object that holds all the loading states for cart operations.
   */
  selectCartLoadingObject: MemoizedSelector<object, DaffCartReducerState<T>['loading']>;
  /**
   * Selects whether there is a cart operation in progress.
   * This does not include operations specifically for cart subfields.
   */
  selectCartLoading: MemoizedSelector<object, boolean>;
  /**
   * Selects whether there is a cart resolve operation in progress.
   * This does not include operations specifically for cart subfields.
   * This pertains only to requests that do not mutate data such as "load" or "list".
   */
  selectCartResolving: MemoizedSelector<object, boolean>;
  /**
   * Selects whether there is a cart mutate operation in progress.
   * This does not include operations specifically for cart subfields.
   * This pertains only to requests that mutate data such as "update".
   */
  selectCartMutating: MemoizedSelector<object, boolean>;
  /**
   * Selects whether there is a cart billing address operation in progress.
   */
  selectBillingAddressLoading: MemoizedSelector<object, boolean>;
  /**
   * Selects whether there is a cart billing address resolve operation in progress.
   * This pertains only to requests that do not mutate data such as "load" or "list".
   */
  selectBillingAddressResolving: MemoizedSelector<object, boolean>;
  /**
   * Selects whether there is a cart billing address mutate operation in progress.
   * This pertains only to requests that mutate data such as "update".
   */
  selectBillingAddressMutating: MemoizedSelector<object, boolean>;
  /**
   * Selects whether there is a cart shipping address operation in progress.
   */
  selectShippingAddressLoading: MemoizedSelector<object, boolean>;
  /**
   * Selects whether there is a cart shipping address resolve operation in progress.
   * This pertains only to requests that do not mutate data such as "load" or "list".
   */
  selectShippingAddressResolving: MemoizedSelector<object, boolean>;
  /**
   * Selects whether there is a cart shipping address mutate operation in progress.
   * This pertains only to requests that mutate data such as "update".
   */
  selectShippingAddressMutating: MemoizedSelector<object, boolean>;
  /**
   * Selects whether there is a cart shipping information operation in progress.
   */
  selectShippingInformationLoading: MemoizedSelector<object, boolean>;
  /**
   * Selects whether there is a cart shipping information resolve operation in progress.
   * This pertains only to requests that do not mutate data such as "load" or "list".
   */
  selectShippingInformationResolving: MemoizedSelector<object, boolean>;
  /**
   * Selects whether there is a cart shipping information mutate operation in progress.
   * This pertains only to requests that mutate data such as "update".
   */
  selectShippingInformationMutating: MemoizedSelector<object, boolean>;
  /**
   * Selects whether there is a cart shipping methods operation in progress.
   */
  selectShippingMethodsLoading: MemoizedSelector<object, boolean>;
  /**
   * Selects whether there is a cart shipping methods resolve operation in progress.
   * This pertains only to requests that do not mutate data such as "load" or "list".
   */
  selectShippingMethodsResolving: MemoizedSelector<object, boolean>;
  /**
   * Selects whether there is a cart payment operation in progress.
   */
  selectPaymentLoading: MemoizedSelector<object, boolean>;
  /**
   * Selects whether there is a cart payment resolve operation in progress.
   * This pertains only to requests that do not mutate data such as "load" or "list".
   */
  selectPaymentResolving: MemoizedSelector<object, boolean>;
  /**
   * Selects whether there is a cart payment mutate operation in progress.
   * This pertains only to requests that mutate data such as "update".
   */
  selectPaymentMutating: MemoizedSelector<object, boolean>;
  /**
   * Selects whether there is a cart payment methods operation in progress.
   */
  selectPaymentMethodsLoading: MemoizedSelector<object, boolean>;
  /**
   * Selects whether there is a cart payment methods resolve operation in progress.
   * This pertains only to requests that do not mutate data such as "load" or "list".
   */
  selectPaymentMethodsResolving: MemoizedSelector<object, boolean>;
  /**
   * Selects whether there is a cart coupon operation in progress.
   */
  selectCouponLoading: MemoizedSelector<object, boolean>;
  /**
   * Selects whether there is a cart coupon resolve operation in progress.
   * This pertains only to requests that do not mutate data such as "load" or "list".
   */
  selectCouponResolving: MemoizedSelector<object, boolean>;
  /**
   * Selects whether there is a cart coupon mutate operation in progress.
   * This pertains only to requests that mutate data such as "update".
   */
  selectCouponMutating: MemoizedSelector<object, boolean>;
  /**
   * Selects whether there is a cart item operation in progress.
   */
  selectItemLoading: MemoizedSelector<object, boolean>;
  /**
   * Selects whether there is a cart item resolve operation in progress.
   * This pertains only to requests that do not mutate data such as "load" or "list".
   */
  selectItemResolving: MemoizedSelector<object, boolean>;
  /**
   * Selects whether there is a cart item mutate operation in progress.
   * This pertains only to requests that mutate data such as "update".
   */
	selectItemMutating: MemoizedSelector<object, boolean>;

	selectCartErrorsObject: MemoizedSelector<object, DaffCartReducerState<T>['errors']>;
	selectCartErrors: MemoizedSelector<object, string[]>;
	selectBillingAddressErrors: MemoizedSelector<object, string[]>;
	selectShippingAddressErrors: MemoizedSelector<object, string[]>;
	selectShippingInformationErrors: MemoizedSelector<object, string[]>;
	selectShippingMethodsErrors: MemoizedSelector<object, string[]>;
	selectPaymentErrors: MemoizedSelector<object, string[]>;
	selectPaymentMethodsErrors: MemoizedSelector<object, string[]>;
  selectCouponErrors: MemoizedSelector<object, string[]>;
	selectItemErrors: MemoizedSelector<object, string[]>;

	selectCartId: MemoizedSelector<object, T['id']>;
	selectCartSubtotal: MemoizedSelector<object, DaffCartTotal['value']>;
	selectCartGrandTotal: MemoizedSelector<object, DaffCartTotal['value']>;
	selectCartSubtotalExcludingTax: MemoizedSelector<object, DaffCartTotal['value']>;
	selectCartSubtotalIncludingTax: MemoizedSelector<object, DaffCartTotal['value']>;
	selectCartSubtotalWithDiscountExcludingTax: MemoizedSelector<object, DaffCartTotal['value']>;
	selectCartSubtotalWithDiscountIncludingTax: MemoizedSelector<object, DaffCartTotal['value']>;
	selectCartTotalTax: MemoizedSelector<object, DaffCartTotal['value']>;
	selectCartTotalDiscount: MemoizedSelector<object, DaffCartTotal['value']>;
	selectCartShippingTotal: MemoizedSelector<object, DaffCartTotal['value']>;
	selectCartCoupons: MemoizedSelector<object, T['coupons']>;
	selectCartItems: MemoizedSelector<object, T['items']>;
	selectCartHasOutOfStockItems: MemoizedSelector<object, boolean>;
	selectCartBillingAddress: MemoizedSelector<object, T['billing_address']>;
	selectCartShippingAddress: MemoizedSelector<object, T['shipping_address']>;
	selectCartPayment: MemoizedSelector<object, T['payment']>;
	selectCartTotals: MemoizedSelector<object, T['totals']>;
	selectCartShippingInformation: MemoizedSelector<object, T['shipping_information']>;
	selectCartAvailableShippingMethods: MemoizedSelector<object, T['available_shipping_methods']>;
  selectCartAvailablePaymentMethods: MemoizedSelector<object, T['available_payment_methods']>;

  selectIsCartEmpty: MemoizedSelector<object, boolean>;
  selectCartItemDiscountedRowTotal: MemoizedSelectorWithProps<object, object, number>;
  /**
   * Selects whether the cart's shipping address equals the billing address.
   * Returns false if either address is null or undefined.
   */
	selectIsBillingSameAsShipping: MemoizedSelector<object, boolean>;

  selectHasBillingAddress: MemoizedSelector<object, boolean>;
  selectHasShippingAddress: MemoizedSelector<object, boolean>;
  selectHasShippingMethod: MemoizedSelector<object, boolean>;
  selectHasPaymentMethod: MemoizedSelector<object, boolean>;
  selectCanPlaceOrder: MemoizedSelector<object, boolean, DefaultProjectorFn<boolean>>;
}

const createCartSelectors = <
  T extends DaffCart = DaffCart,
	V extends DaffCartOrderResult = DaffCartOrderResult,
	U extends DaffCartItem = DaffCartItem
>(): DaffCartStateMemoizedSelectors<T> => {
	const selectCartFeatureState = getDaffCartFeatureSelector<T, V, U>().selectCartFeatureState;
	const selectCartState = createSelector(
		selectCartFeatureState,
		(state: DaffCartReducersState<T, V, U>) => state.cart
	);
	const selectCartValue = createSelector(
		selectCartState,
		(state: DaffCartReducerState<T>) => state.cart
	);
  const selectCartResolved = createSelector(
		selectCartState,
		(state: DaffCartReducerState<T>) => state.resolved
  );

  const selectCartLoadingObject = createSelector(
		selectCartState,
		state => state.loading
  );
	const selectCartLoading = createSelector(
		selectCartLoadingObject,
		loadingObject => loadingObject[DaffCartOperationType.Cart] !== DaffLoadingState.Complete
  );
  const selectCartResolving = createSelector(
		selectCartLoadingObject,
		loadingObject => loadingObject[DaffCartOperationType.Cart] === DaffLoadingState.Resolving
  );
  const selectCartMutating = createSelector(
		selectCartLoadingObject,
		loadingObject => loadingObject[DaffCartOperationType.Cart] === DaffLoadingState.Mutating
	);
	const selectBillingAddressLoading = createSelector(
		selectCartLoadingObject,
		loadingObject => loadingObject[DaffCartOperationType.BillingAddress] !== DaffLoadingState.Complete
  );
  const selectBillingAddressResolving = createSelector(
		selectCartLoadingObject,
		loadingObject => loadingObject[DaffCartOperationType.BillingAddress] === DaffLoadingState.Resolving
  );
  const selectBillingAddressMutating = createSelector(
		selectCartLoadingObject,
		loadingObject => loadingObject[DaffCartOperationType.BillingAddress] === DaffLoadingState.Mutating
	);
	const selectShippingAddressLoading = createSelector(
		selectCartLoadingObject,
		loadingObject => loadingObject[DaffCartOperationType.ShippingAddress] !== DaffLoadingState.Complete
  );
  const selectShippingAddressResolving = createSelector(
		selectCartLoadingObject,
		loadingObject => loadingObject[DaffCartOperationType.ShippingAddress] === DaffLoadingState.Resolving
  );
  const selectShippingAddressMutating = createSelector(
		selectCartLoadingObject,
		loadingObject => loadingObject[DaffCartOperationType.ShippingAddress] === DaffLoadingState.Mutating
	);
	const selectShippingInformationLoading = createSelector(
		selectCartLoadingObject,
		loadingObject => loadingObject[DaffCartOperationType.ShippingInformation] !== DaffLoadingState.Complete
  );
  const selectShippingInformationResolving = createSelector(
		selectCartLoadingObject,
		loadingObject => loadingObject[DaffCartOperationType.ShippingInformation] === DaffLoadingState.Resolving
  );
  const selectShippingInformationMutating = createSelector(
		selectCartLoadingObject,
		loadingObject => loadingObject[DaffCartOperationType.ShippingInformation] === DaffLoadingState.Mutating
	);
	const selectShippingMethodsLoading = createSelector(
		selectCartLoadingObject,
		loadingObject => loadingObject[DaffCartOperationType.ShippingMethods] !== DaffLoadingState.Complete
  );
  const selectShippingMethodsResolving = createSelector(
		selectCartLoadingObject,
		loadingObject => loadingObject[DaffCartOperationType.ShippingMethods] === DaffLoadingState.Resolving
  );
	const selectPaymentLoading = createSelector(
		selectCartLoadingObject,
		loadingObject => loadingObject[DaffCartOperationType.Payment] !== DaffLoadingState.Complete
  );
  const selectPaymentResolving = createSelector(
		selectCartLoadingObject,
		loadingObject => loadingObject[DaffCartOperationType.Payment] === DaffLoadingState.Resolving
  );
  const selectPaymentMutating = createSelector(
		selectCartLoadingObject,
		loadingObject => loadingObject[DaffCartOperationType.Payment] === DaffLoadingState.Mutating
	);
	const selectPaymentMethodsLoading = createSelector(
		selectCartLoadingObject,
		loadingObject => loadingObject[DaffCartOperationType.PaymentMethods] !== DaffLoadingState.Complete
  );
  const selectPaymentMethodsResolving = createSelector(
		selectCartLoadingObject,
		loadingObject => loadingObject[DaffCartOperationType.PaymentMethods] === DaffLoadingState.Resolving
  );
	const selectItemLoading = createSelector(
		selectCartLoadingObject,
		loadingObject => loadingObject[DaffCartOperationType.Item] !== DaffLoadingState.Complete
  );
  const selectItemResolving = createSelector(
		selectCartLoadingObject,
		loadingObject => loadingObject[DaffCartOperationType.Item] === DaffLoadingState.Resolving
  );
  const selectItemMutating = createSelector(
		selectCartLoadingObject,
		loadingObject => loadingObject[DaffCartOperationType.Item] === DaffLoadingState.Mutating
  );
  const selectCouponLoading = createSelector(
		selectCartLoadingObject,
		loadingObject => loadingObject[DaffCartOperationType.Coupon] !== DaffLoadingState.Complete
  );
  const selectCouponResolving = createSelector(
		selectCartLoadingObject,
		loadingObject => loadingObject[DaffCartOperationType.Coupon] === DaffLoadingState.Resolving
  );
  const selectCouponMutating = createSelector(
		selectCartLoadingObject,
		loadingObject => loadingObject[DaffCartOperationType.Coupon] === DaffLoadingState.Mutating
  );

	const selectCartErrorsObject = createSelector(
		selectCartState,
		(state: DaffCartReducerState<T>) => state.errors
	);
	const selectCartErrors = createSelector(
		selectCartErrorsObject,
		(state: DaffCartReducerState<T>['errors']) => state[DaffCartOperationType.Cart]
	);
	const selectBillingAddressErrors = createSelector(
		selectCartErrorsObject,
		(state: DaffCartReducerState<T>['errors']) => state[DaffCartOperationType.BillingAddress]
	);
	const selectShippingAddressErrors = createSelector(
		selectCartErrorsObject,
		(state: DaffCartReducerState<T>['errors']) => state[DaffCartOperationType.ShippingAddress]
	);
	const selectShippingInformationErrors = createSelector(
		selectCartErrorsObject,
		(state: DaffCartReducerState<T>['errors']) => state[DaffCartOperationType.ShippingInformation]
	);
	const selectShippingMethodsErrors = createSelector(
		selectCartErrorsObject,
		(state: DaffCartReducerState<T>['errors']) => state[DaffCartOperationType.ShippingMethods]
	);
	const selectPaymentErrors = createSelector(
		selectCartErrorsObject,
		(state: DaffCartReducerState<T>['errors']) => state[DaffCartOperationType.Payment]
	);
	const selectPaymentMethodsErrors = createSelector(
		selectCartErrorsObject,
		(state: DaffCartReducerState<T>['errors']) => state[DaffCartOperationType.PaymentMethods]
	);
	const selectItemErrors = createSelector(
		selectCartErrorsObject,
		(state: DaffCartReducerState<T>['errors']) => state[DaffCartOperationType.Item]
  );
  const selectCouponErrors = createSelector(
		selectCartErrorsObject,
		(state: DaffCartReducerState<T>['errors']) => state[DaffCartOperationType.Coupon]
  );

	const selectCartId = createSelector(
		selectCartValue,
		(state: DaffCartReducerState<T>['cart']) => state.id
	);
	/**
	 * @deprecated use selectCartSubtotalExcludingTax selector instead.
	 */
	const selectCartSubtotal = createSelector(
		selectCartValue,
		(state: DaffCartReducerState<T>['cart']) => {
			const subtotalObject = state.totals.find(total => total.name === DaffCartTotalTypeEnum.subtotalExcludingTax);
			return subtotalObject ? subtotalObject.value : null;
		}
	);
	const selectCartGrandTotal = createSelector(
		selectCartValue,
		(state: DaffCartReducerState<T>['cart']) => {
			const grandTotalObject = state.totals.find(total => total.name === DaffCartTotalTypeEnum.grandTotal);
			return grandTotalObject ? grandTotalObject.value : null;
		}
	);
	const selectCartSubtotalExcludingTax = createSelector(
		selectCartValue,
		(state: DaffCartReducerState<T>['cart']) => {
			const subtotalExcludingTaxObject = state.totals.find(total => total.name === DaffCartTotalTypeEnum.subtotalExcludingTax);
			return subtotalExcludingTaxObject ? subtotalExcludingTaxObject.value : null;
		}
	);
	const selectCartSubtotalIncludingTax = createSelector(
		selectCartValue,
		(state: DaffCartReducerState<T>['cart']) => {
			const subtotalIncludingTaxObject = state.totals.find(total => total.name === DaffCartTotalTypeEnum.subtotalIncludingTax);
			return subtotalIncludingTaxObject ? subtotalIncludingTaxObject.value : null;
		}
	);
	const selectCartSubtotalWithDiscountExcludingTax = createSelector(
		selectCartValue,
		(state: DaffCartReducerState<T>['cart']) => {
			const subtotalWithDiscountExcludingTaxObject = state.totals.find(total => total.name === DaffCartTotalTypeEnum.subtotalWithDiscountExcludingTax);
			return subtotalWithDiscountExcludingTaxObject ? subtotalWithDiscountExcludingTaxObject.value : null;
		}
	);
	const selectCartSubtotalWithDiscountIncludingTax = createSelector(
		selectCartValue,
		(state: DaffCartReducerState<T>['cart']) => {
			const subtotalWithDiscountIncludingTaxObject = state.totals.find(total => total.name === DaffCartTotalTypeEnum.subtotalWithDiscountIncludingTax);
			return subtotalWithDiscountIncludingTaxObject ? subtotalWithDiscountIncludingTaxObject.value : null;
		}
	);
	const selectCartTotalTax = createSelector(
		selectCartValue,
		(state: DaffCartReducerState<T>['cart']) => {
			const taxObject = state.totals.find(total => total.name === DaffCartTotalTypeEnum.tax);
			return taxObject ? taxObject.value : null;
		}
	);
	const selectCartTotalDiscount = createSelector(
		selectCartValue,
		(state: DaffCartReducerState<T>['cart']) => {
			const discountObject = state.totals.find(total => total.name === DaffCartTotalTypeEnum.discount);
			return discountObject ? discountObject.value : null;
		}
	);
	const selectCartShippingTotal = createSelector(
		selectCartValue,
		(state: DaffCartReducerState<T>['cart']) => {
			const shippingTotalObject = state.totals.find(total => total.name === DaffCartTotalTypeEnum.shipping);
			return shippingTotalObject ? shippingTotalObject.value : null;
		}
	);
	const selectCartCoupons = createSelector(
		selectCartValue,
		(state: DaffCartReducerState<T>['cart']) => state.coupons
	);
	const selectCartItems = createSelector(
		selectCartValue,
		(state: DaffCartReducerState<T>['cart']) => state.items
	);
	const selectCartHasOutOfStockItems = createSelector(
		selectCartValue,
		(state: DaffCartReducerState<T>['cart']) => state.items.reduce((acc, item) => (acc || !item.in_stock), false)
	)
	const selectCartBillingAddress = createSelector(
		selectCartValue,
		(state: DaffCartReducerState<T>['cart']) => state.billing_address
	);
	const selectCartShippingAddress = createSelector(
		selectCartValue,
		(state: DaffCartReducerState<T>['cart']) => state.shipping_address
	);
	const selectCartPayment = createSelector(
		selectCartValue,
		(state: DaffCartReducerState<T>['cart']) => state.payment
	);
	const selectCartTotals = createSelector(
		selectCartValue,
		(state: DaffCartReducerState<T>['cart']) => state.totals
	);
	const selectCartShippingInformation = createSelector(
		selectCartValue,
		(state: DaffCartReducerState<T>['cart']) => state.shipping_information
	);
	const selectCartAvailableShippingMethods = createSelector(
		selectCartValue,
		(state: DaffCartReducerState<T>['cart']) => state.available_shipping_methods
	);
	const selectCartAvailablePaymentMethods = createSelector(
		selectCartValue,
		(state: DaffCartReducerState<T>['cart']) => state.available_payment_methods
  );

	const selectIsCartEmpty = createSelector(
		selectCartValue,
		cart => !cart || !cart.items || cart.items.length === 0
  );
	const selectCartItemDiscountedRowTotal = createSelector(
		selectCartItems,
		(cartItems: DaffCartItem[], props) => {
			const cartItem = cartItems.find(item => item.item_id === props.id)
			return daffSubtract(cartItem.row_total, cartItem.total_discount);
		}
  );
  const selectIsBillingSameAsShipping = createSelector(
    selectCartShippingAddress,
    selectCartBillingAddress,
    (shippingAddress, billingAddress) => daffComparePersonalAddresses(shippingAddress, billingAddress)
  )

  const selectHasBillingAddress = createSelector(
    selectCartBillingAddress,
    billingAddress => !!billingAddress
  );

  const selectHasShippingAddress = createSelector(
    selectCartShippingAddress,
    shippingAddress => !!shippingAddress
  );

  const selectHasShippingMethod = createSelector(
    selectCartShippingInformation,
    shippingMethod => !!shippingMethod
  );

  const selectHasPaymentMethod = createSelector(
    selectCartPayment,
    paymentMethod => !!paymentMethod && paymentMethod.method !== ''
  );

  const selectCanPlaceOrder = createSelector(
    selectIsCartEmpty,
    selectHasBillingAddress,
    selectHasShippingAddress,
    selectHasShippingMethod,
    selectHasPaymentMethod,
    (
      isCartEmpty,
      hasBillingAddress,
      hasShippingAddress,
      hasShippingMethod,
      hasPaymentMethod
    ) => !isCartEmpty
      && hasBillingAddress
      && hasShippingAddress
      && hasShippingMethod
      && hasPaymentMethod
  )

	return {
		selectCartState,
		selectCartValue,
    selectCartResolved,

    selectCartLoadingObject,
    selectCartLoading,
    selectCartResolving,
    selectCartMutating,
    selectBillingAddressLoading,
    selectBillingAddressResolving,
    selectBillingAddressMutating,
    selectShippingAddressLoading,
    selectShippingAddressResolving,
    selectShippingAddressMutating,
    selectShippingInformationLoading,
    selectShippingInformationResolving,
    selectShippingInformationMutating,
    selectShippingMethodsLoading,
    selectShippingMethodsResolving,
    selectPaymentLoading,
    selectPaymentResolving,
    selectPaymentMutating,
    selectPaymentMethodsLoading,
    selectPaymentMethodsResolving,
    selectCouponLoading,
    selectCouponResolving,
    selectCouponMutating,
    selectItemLoading,
    selectItemResolving,
    selectItemMutating,

		selectCartErrorsObject,
		selectCartErrors,
		selectBillingAddressErrors,
		selectShippingAddressErrors,
		selectShippingInformationErrors,
		selectShippingMethodsErrors,
		selectPaymentErrors,
		selectPaymentMethodsErrors,
    selectItemErrors,
    selectCouponErrors,

		selectCartId,
		selectCartSubtotal,
		selectCartGrandTotal,
		selectCartSubtotalExcludingTax,
		selectCartSubtotalIncludingTax,
		selectCartSubtotalWithDiscountExcludingTax,
		selectCartSubtotalWithDiscountIncludingTax,
		selectCartTotalDiscount,
		selectCartTotalTax,
		selectCartShippingTotal,
		selectCartCoupons,
		selectCartItems,
		selectCartHasOutOfStockItems,
		selectCartBillingAddress,
		selectCartShippingAddress,
		selectCartPayment,
		selectCartTotals,
		selectCartShippingInformation,
		selectCartAvailableShippingMethods,
    selectCartAvailablePaymentMethods,

		selectIsCartEmpty,
    selectCartItemDiscountedRowTotal,
    selectIsBillingSameAsShipping,

    selectHasBillingAddress,
    selectHasShippingAddress,
    selectHasShippingMethod,
    selectHasPaymentMethod,
    selectCanPlaceOrder
	}
}

export const getCartSelectors = (() => {
	let cache;
	return <
    T extends DaffCart = DaffCart,
		V extends DaffCartOrderResult = DaffCartOrderResult,
		U extends DaffCartItem = DaffCartItem
  >(): DaffCartStateMemoizedSelectors<T> => cache = cache
		? cache
		: createCartSelectors<T, V, U>();
})();
