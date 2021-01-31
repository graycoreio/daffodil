import {
  createSelector,
  MemoizedSelector,
  MemoizedSelectorWithProps,
  DefaultProjectorFn,
} from '@ngrx/store';

import {
  DaffCart,
  DaffCartTotal,
  DaffCartOrderResult,
  DaffCartTotalTypeEnum,
} from '@daffodil/cart';
import { daffSubtract } from '@daffodil/core';
import {
  DaffLoadingState,
  DaffStateError,
} from '@daffodil/core/state';
import { daffComparePersonalAddresses } from '@daffodil/geography';

import { DaffStatefulCartItem } from '../../models/stateful-cart-item';
import { DaffCartResolveState } from '../../reducers/cart-resolve/cart-resolve-state.enum';
import { DaffCartItemLoadingState } from '../../reducers/loading/cart-loading.type';
import {
  DaffCartReducerState,
  DaffCartReducersState,
  DaffCartOperationType,
} from '../../reducers/public_api';
import { getDaffCartFeatureSelector } from '../cart-feature.selector';
import { getDaffCartItemEntitiesSelectors } from '../cart-item-entities/cart-item-entities.selectors';

export interface DaffCartStateMemoizedSelectors<
  T extends DaffCart = DaffCart
> {
	selectCartState: MemoizedSelector<Record<string, any>, DaffCartReducerState<T>>;
  selectCartValue: MemoizedSelector<Record<string, any>, T>;

  selectCartResolved: MemoizedSelector<Record<string, any>, DaffCartResolveState>;

  /**
   * The object that holds all the loading states for cart operations.
   */
  selectCartLoadingObject: MemoizedSelector<Record<string, any>, DaffCartReducerState<T>['loading']>;
  /**
   * Selects whether there is any cart operation in progress.
   * This includes operations specifically for cart subfields.
   */
  selectCartFeatureLoading: MemoizedSelector<Record<string, any>, boolean>;
  /**
   * Selects whether there is any cart resolve operation in progress.
   * This includes operations for cart subfields.
   * This pertains only to requests that do not mutate data such as "load" or "list".
   */
  selectCartFeatureResolving: MemoizedSelector<Record<string, any>, boolean>;
  /**
   * Selects whether there is any cart mutate operation in progress.
   * This includes operations for cart subfields.
   * This pertains only to requests that mutate data such as "update".
   */
  selectCartFeatureMutating: MemoizedSelector<Record<string, any>, boolean>;
  /**
   * Selects whether there is a cart operation in progress.
   * This does not include operations specifically for cart subfields.
   */
  selectCartLoading: MemoizedSelector<Record<string, any>, boolean>;
  /**
   * Selects whether there is a cart resolve operation in progress.
   * This does not include operations specifically for cart subfields.
   * This pertains only to requests that do not mutate data such as "load" or "list".
   */
  selectCartResolving: MemoizedSelector<Record<string, any>, boolean>;
  /**
   * Selects whether there is a cart mutate operation in progress.
   * This does not include operations specifically for cart subfields.
   * This pertains only to requests that mutate data such as "update".
   */
  selectCartMutating: MemoizedSelector<Record<string, any>, boolean>;
  /**
   * Selects whether there is a cart billing address operation in progress.
   */
  selectBillingAddressLoading: MemoizedSelector<Record<string, any>, boolean>;
  /**
   * Selects whether there is a cart billing address resolve operation in progress.
   * This pertains only to requests that do not mutate data such as "load" or "list".
   */
  selectBillingAddressResolving: MemoizedSelector<Record<string, any>, boolean>;
  /**
   * Selects whether there is a cart billing address mutate operation in progress.
   * This pertains only to requests that mutate data such as "update".
   */
  selectBillingAddressMutating: MemoizedSelector<Record<string, any>, boolean>;
  /**
   * Selects whether there is a cart shipping address operation in progress.
   */
  selectShippingAddressLoading: MemoizedSelector<Record<string, any>, boolean>;
  /**
   * Selects whether there is a cart shipping address resolve operation in progress.
   * This pertains only to requests that do not mutate data such as "load" or "list".
   */
  selectShippingAddressResolving: MemoizedSelector<Record<string, any>, boolean>;
  /**
   * Selects whether there is a cart shipping address mutate operation in progress.
   * This pertains only to requests that mutate data such as "update".
   */
  selectShippingAddressMutating: MemoizedSelector<Record<string, any>, boolean>;
  /**
   * Selects whether there is a cart shipping information operation in progress.
   */
  selectShippingInformationLoading: MemoizedSelector<Record<string, any>, boolean>;
  /**
   * Selects whether there is a cart shipping information resolve operation in progress.
   * This pertains only to requests that do not mutate data such as "load" or "list".
   */
  selectShippingInformationResolving: MemoizedSelector<Record<string, any>, boolean>;
  /**
   * Selects whether there is a cart shipping information mutate operation in progress.
   * This pertains only to requests that mutate data such as "update".
   */
  selectShippingInformationMutating: MemoizedSelector<Record<string, any>, boolean>;
  /**
   * Selects whether there is a cart shipping methods operation in progress.
   */
  selectShippingMethodsLoading: MemoizedSelector<Record<string, any>, boolean>;
  /**
   * Selects whether there is a cart shipping methods resolve operation in progress.
   * This pertains only to requests that do not mutate data such as "load" or "list".
   */
  selectShippingMethodsResolving: MemoizedSelector<Record<string, any>, boolean>;
  /**
   * Selects whether there is a cart payment operation in progress.
   */
  selectPaymentLoading: MemoizedSelector<Record<string, any>, boolean>;
  /**
   * Selects whether there is a cart payment resolve operation in progress.
   * This pertains only to requests that do not mutate data such as "load" or "list".
   */
  selectPaymentResolving: MemoizedSelector<Record<string, any>, boolean>;
  /**
   * Selects whether there is a cart payment mutate operation in progress.
   * This pertains only to requests that mutate data such as "update".
   */
  selectPaymentMutating: MemoizedSelector<Record<string, any>, boolean>;
  /**
   * Selects whether there is a cart payment methods operation in progress.
   */
  selectPaymentMethodsLoading: MemoizedSelector<Record<string, any>, boolean>;
  /**
   * Selects whether there is a cart payment methods resolve operation in progress.
   * This pertains only to requests that do not mutate data such as "load" or "list".
   */
  selectPaymentMethodsResolving: MemoizedSelector<Record<string, any>, boolean>;
  /**
   * Selects whether there is a cart coupon operation in progress.
   */
  selectCouponLoading: MemoizedSelector<Record<string, any>, boolean>;
  /**
   * Selects whether there is a cart coupon resolve operation in progress.
   * This pertains only to requests that do not mutate data such as "load" or "list".
   */
  selectCouponResolving: MemoizedSelector<Record<string, any>, boolean>;
  /**
   * Selects whether there is a cart coupon mutate operation in progress.
   * This pertains only to requests that mutate data such as "update".
   */
  selectCouponMutating: MemoizedSelector<Record<string, any>, boolean>;
  /**
   * Selects whether there is a cart item operation in progress.
   */
	selectItemLoading: MemoizedSelector<Record<string, any>, boolean>;
	/**
	 * Selects whether there is a cart item add operation in progress.
	 */
  selectItemAdding: MemoizedSelector<Record<string, any>, boolean>;
  /**
   * Selects whether there is a cart item resolve operation in progress.
   * This pertains only to requests that do not mutate data such as "load" or "list".
   */
  selectItemResolving: MemoizedSelector<Record<string, any>, boolean>;

	selectCartErrorsObject: MemoizedSelector<Record<string, any>, DaffCartReducerState<T>['errors']>;
	selectCartErrors: MemoizedSelector<Record<string, any>, DaffStateError[]>;
	selectBillingAddressErrors: MemoizedSelector<Record<string, any>, DaffStateError[]>;
	selectShippingAddressErrors: MemoizedSelector<Record<string, any>, DaffStateError[]>;
	selectShippingInformationErrors: MemoizedSelector<Record<string, any>, DaffStateError[]>;
	selectShippingMethodsErrors: MemoizedSelector<Record<string, any>, DaffStateError[]>;
	selectPaymentErrors: MemoizedSelector<Record<string, any>, DaffStateError[]>;
	selectPaymentMethodsErrors: MemoizedSelector<Record<string, any>, DaffStateError[]>;
  selectCouponErrors: MemoizedSelector<Record<string, any>, DaffStateError[]>;
	selectItemErrors: MemoizedSelector<Record<string, any>, DaffStateError[]>;

	selectCartId: MemoizedSelector<Record<string, any>, T['id']>;
	selectCartSubtotal: MemoizedSelector<Record<string, any>, DaffCartTotal['value']>;
	selectCartGrandTotal: MemoizedSelector<Record<string, any>, DaffCartTotal['value']>;
	selectCartSubtotalExcludingTax: MemoizedSelector<Record<string, any>, DaffCartTotal['value']>;
	selectCartSubtotalIncludingTax: MemoizedSelector<Record<string, any>, DaffCartTotal['value']>;
	selectCartSubtotalWithDiscountExcludingTax: MemoizedSelector<Record<string, any>, DaffCartTotal['value']>;
	selectCartSubtotalWithDiscountIncludingTax: MemoizedSelector<Record<string, any>, DaffCartTotal['value']>;
	selectCartTotalTax: MemoizedSelector<Record<string, any>, DaffCartTotal['value']>;
	/**
	 * Selects the DaffCartTotals for cart discounts. These are discounts associated with coupon codes.
	 */
	selectCartDiscountTotals: MemoizedSelector<Record<string, any>, DaffCartTotal[]>;
	selectCartShippingTotal: MemoizedSelector<Record<string, any>, DaffCartTotal['value']>;
	selectCartCoupons: MemoizedSelector<Record<string, any>, T['coupons']>;
	/**
	 * @deprecated use getDaffCartItemEntitiesSelectors().selectAllCartItems instead.
	 */
	selectCartItems: MemoizedSelector<Record<string, any>, T['items']>;
	selectCartHasOutOfStockItems: MemoizedSelector<Record<string, any>, boolean>;
	selectCartBillingAddress: MemoizedSelector<Record<string, any>, T['billing_address']>;
	selectCartShippingAddress: MemoizedSelector<Record<string, any>, T['shipping_address']>;
	selectCartPayment: MemoizedSelector<Record<string, any>, T['payment']>;
	selectCartTotals: MemoizedSelector<Record<string, any>, T['totals']>;
	selectCartShippingInformation: MemoizedSelector<Record<string, any>, T['shipping_information']>;
	selectCartAvailableShippingMethods: MemoizedSelector<Record<string, any>, T['available_shipping_methods']>;
  selectCartAvailablePaymentMethods: MemoizedSelector<Record<string, any>, T['available_payment_methods']>;

  selectIsCartEmpty: MemoizedSelector<Record<string, any>, boolean>;
  /**
   * Selects whether the cart's shipping address equals the billing address.
   * Returns false if either address is null or undefined.
   */
	selectIsBillingSameAsShipping: MemoizedSelector<Record<string, any>, boolean>;

  selectHasBillingAddress: MemoizedSelector<Record<string, any>, boolean>;
  selectHasShippingAddress: MemoizedSelector<Record<string, any>, boolean>;
  selectHasShippingMethod: MemoizedSelector<Record<string, any>, boolean>;
  selectHasPaymentMethod: MemoizedSelector<Record<string, any>, boolean>;
  selectCanPlaceOrder: MemoizedSelector<Record<string, any>, boolean, DefaultProjectorFn<boolean>>;
}

const createCartSelectors = <
  T extends DaffCart = DaffCart,
	V extends DaffCartOrderResult = DaffCartOrderResult,
	U extends DaffStatefulCartItem = DaffStatefulCartItem
>(): DaffCartStateMemoizedSelectors<T> => {
  const selectCartFeatureState = getDaffCartFeatureSelector<T, V, U>().selectCartFeatureState;
  const { selectCartItemMutating } = getDaffCartItemEntitiesSelectors<T, V, U>();
  const selectCartState = createSelector(
    selectCartFeatureState,
    (state: DaffCartReducersState<T, V, U>) => state.cart,
  );
  const selectCartValue = createSelector(
    selectCartState,
    (state: DaffCartReducerState<T>) => state.cart,
  );

  const selectCartResolved = createSelector(
    selectCartState,
    (state: DaffCartReducerState<T>) => state.resolved,
  );

  const selectCartLoadingObject = createSelector(
    selectCartState,
    state => state.loading,
  );
  const selectCartLoading = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.Cart] !== DaffLoadingState.Complete,
  );
  const selectCartResolving = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.Cart] === DaffLoadingState.Resolving,
  );
  const selectCartMutating = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.Cart] === DaffLoadingState.Mutating,
  );
  const selectBillingAddressLoading = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.BillingAddress] !== DaffLoadingState.Complete,
  );
  const selectBillingAddressResolving = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.BillingAddress] === DaffLoadingState.Resolving,
  );
  const selectBillingAddressMutating = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.BillingAddress] === DaffLoadingState.Mutating,
  );
  const selectShippingAddressLoading = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.ShippingAddress] !== DaffLoadingState.Complete,
  );
  const selectShippingAddressResolving = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.ShippingAddress] === DaffLoadingState.Resolving,
  );
  const selectShippingAddressMutating = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.ShippingAddress] === DaffLoadingState.Mutating,
  );
  const selectShippingInformationLoading = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.ShippingInformation] !== DaffLoadingState.Complete,
  );
  const selectShippingInformationResolving = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.ShippingInformation] === DaffLoadingState.Resolving,
  );
  const selectShippingInformationMutating = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.ShippingInformation] === DaffLoadingState.Mutating,
  );
  const selectShippingMethodsLoading = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.ShippingMethods] !== DaffLoadingState.Complete,
  );
  const selectShippingMethodsResolving = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.ShippingMethods] === DaffLoadingState.Resolving,
  );
  const selectPaymentLoading = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.Payment] !== DaffLoadingState.Complete,
  );
  const selectPaymentResolving = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.Payment] === DaffLoadingState.Resolving,
  );
  const selectPaymentMutating = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.Payment] === DaffLoadingState.Mutating,
  );
  const selectPaymentMethodsLoading = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.PaymentMethods] !== DaffLoadingState.Complete,
  );
  const selectPaymentMethodsResolving = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.PaymentMethods] === DaffLoadingState.Resolving,
  );
  const selectItemLoading = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.Item] !== DaffCartItemLoadingState.Complete,
  );
  const selectItemAdding = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.Item] === DaffCartItemLoadingState.Adding,
  );
  const selectItemResolving = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.Item] === DaffCartItemLoadingState.Resolving,
  );
  const selectCouponLoading = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.Coupon] !== DaffLoadingState.Complete,
  );
  const selectCouponResolving = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.Coupon] === DaffLoadingState.Resolving,
  );
  const selectCouponMutating = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.Coupon] === DaffLoadingState.Mutating,
  );
  const selectCartFeatureLoading = createSelector(
    selectCartLoadingObject,
    loadingObject => [
      selectCartLoading,
      selectBillingAddressLoading,
      selectShippingAddressLoading,
      selectShippingInformationLoading,
      selectShippingMethodsLoading,
      selectPaymentLoading,
      selectPaymentMethodsLoading,
      selectCouponLoading,
      selectItemLoading,
    ].map(selector =>
      selector.projector(loadingObject),
    ).reduce((acc, loading) => acc || loading, false),
  );
  const selectCartFeatureResolving = createSelector(
    selectCartLoadingObject,
    loadingObject => [
      selectCartResolving,
      selectBillingAddressResolving,
      selectShippingAddressResolving,
      selectShippingInformationResolving,
      selectShippingMethodsResolving,
      selectPaymentResolving,
      selectPaymentMethodsResolving,
      selectCouponResolving,
      selectItemResolving,
    ].map(selector =>
      selector.projector(loadingObject),
    ).reduce((acc, resolving) => acc || resolving, false),
  );
  const selectCartFeatureMutating = createSelector(
    selectCartLoadingObject,
    selectCartItemMutating,
    (loadingObject, cartItemMutating) => [
      selectCartMutating,
      selectBillingAddressMutating,
      selectShippingAddressMutating,
      selectShippingInformationMutating,
      selectPaymentMutating,
      selectCouponMutating,
      selectItemAdding,
    ].map(selector =>
      selector.projector(loadingObject),
    ).reduce((acc, mutating) => acc || mutating, false) || cartItemMutating,
  );

  const selectCartErrorsObject = createSelector(
    selectCartState,
    (state: DaffCartReducerState<T>) => state.errors,
  );
  const selectCartErrors = createSelector(
    selectCartErrorsObject,
    (state: DaffCartReducerState<T>['errors']) => state[DaffCartOperationType.Cart],
  );
  const selectBillingAddressErrors = createSelector(
    selectCartErrorsObject,
    (state: DaffCartReducerState<T>['errors']) => state[DaffCartOperationType.BillingAddress],
  );
  const selectShippingAddressErrors = createSelector(
    selectCartErrorsObject,
    (state: DaffCartReducerState<T>['errors']) => state[DaffCartOperationType.ShippingAddress],
  );
  const selectShippingInformationErrors = createSelector(
    selectCartErrorsObject,
    (state: DaffCartReducerState<T>['errors']) => state[DaffCartOperationType.ShippingInformation],
  );
  const selectShippingMethodsErrors = createSelector(
    selectCartErrorsObject,
    (state: DaffCartReducerState<T>['errors']) => state[DaffCartOperationType.ShippingMethods],
  );
  const selectPaymentErrors = createSelector(
    selectCartErrorsObject,
    (state: DaffCartReducerState<T>['errors']) => state[DaffCartOperationType.Payment],
  );
  const selectPaymentMethodsErrors = createSelector(
    selectCartErrorsObject,
    (state: DaffCartReducerState<T>['errors']) => state[DaffCartOperationType.PaymentMethods],
  );
  const selectItemErrors = createSelector(
    selectCartErrorsObject,
    (state: DaffCartReducerState<T>['errors']) => state[DaffCartOperationType.Item],
  );
  const selectCouponErrors = createSelector(
    selectCartErrorsObject,
    (state: DaffCartReducerState<T>['errors']) => state[DaffCartOperationType.Coupon],
  );

  const selectCartId = createSelector(
    selectCartValue,
    (state: DaffCartReducerState<T>['cart']) => state.id,
  );
  /**
   * @deprecated use selectCartSubtotalExcludingTax selector instead.
   */
  const selectCartSubtotal = createSelector(
    selectCartValue,
    (state: DaffCartReducerState<T>['cart']) => {
      const subtotalObject = state.totals.find(total => total.name === DaffCartTotalTypeEnum.subtotalExcludingTax);
      return subtotalObject ? subtotalObject.value : null;
    },
  );
  const selectCartGrandTotal = createSelector(
    selectCartValue,
    (state: DaffCartReducerState<T>['cart']) => {
      const grandTotalObject = state.totals.find(total => total.name === DaffCartTotalTypeEnum.grandTotal);
      return grandTotalObject ? grandTotalObject.value : null;
    },
  );
  const selectCartSubtotalExcludingTax = createSelector(
    selectCartValue,
    (state: DaffCartReducerState<T>['cart']) => {
      const subtotalExcludingTaxObject = state.totals.find(total => total.name === DaffCartTotalTypeEnum.subtotalExcludingTax);
      return subtotalExcludingTaxObject ? subtotalExcludingTaxObject.value : null;
    },
  );
  const selectCartSubtotalIncludingTax = createSelector(
    selectCartValue,
    (state: DaffCartReducerState<T>['cart']) => {
      const subtotalIncludingTaxObject = state.totals.find(total => total.name === DaffCartTotalTypeEnum.subtotalIncludingTax);
      return subtotalIncludingTaxObject ? subtotalIncludingTaxObject.value : null;
    },
  );
  const selectCartSubtotalWithDiscountExcludingTax = createSelector(
    selectCartValue,
    (state: DaffCartReducerState<T>['cart']) => {
      const subtotalWithDiscountExcludingTaxObject = state.totals.find(total => total.name === DaffCartTotalTypeEnum.subtotalWithDiscountExcludingTax);
      return subtotalWithDiscountExcludingTaxObject ? subtotalWithDiscountExcludingTaxObject.value : null;
    },
  );
  const selectCartSubtotalWithDiscountIncludingTax = createSelector(
    selectCartValue,
    (state: DaffCartReducerState<T>['cart']) => {
      const subtotalWithDiscountIncludingTaxObject = state.totals.find(total => total.name === DaffCartTotalTypeEnum.subtotalWithDiscountIncludingTax);
      return subtotalWithDiscountIncludingTaxObject ? subtotalWithDiscountIncludingTaxObject.value : null;
    },
  );
  const selectCartTotalTax = createSelector(
    selectCartValue,
    (state: DaffCartReducerState<T>['cart']) => {
      const taxObject = state.totals.find(total => total.name === DaffCartTotalTypeEnum.tax);
      return taxObject ? taxObject.value : null;
    },
  );
  const selectCartDiscountTotals = createSelector(
    selectCartValue,
    (state: DaffCartReducerState<T>['cart']) => {
      const discounts: DaffCartTotal[] = state.totals.filter(total => total.name === DaffCartTotalTypeEnum.discount);
      return discounts ? discounts : [];
    },
  );
  const selectCartShippingTotal = createSelector(
    selectCartValue,
    (state: DaffCartReducerState<T>['cart']) => {
      const shippingTotalObject = state.totals.find(total => total.name === DaffCartTotalTypeEnum.shipping);
      return shippingTotalObject ? shippingTotalObject.value : null;
    },
  );
  const selectCartCoupons = createSelector(
    selectCartValue,
    (state: DaffCartReducerState<T>['cart']) => state.coupons,
  );
  const selectCartItems = createSelector(
    selectCartValue,
    (state: DaffCartReducerState<T>['cart']) => state.items,
  );
  const selectCartHasOutOfStockItems = createSelector(
    selectCartValue,
    (state: DaffCartReducerState<T>['cart']) => state.items.reduce((acc, item) => (acc || !item.in_stock), false),
  );
  const selectCartBillingAddress = createSelector(
    selectCartValue,
    (state: DaffCartReducerState<T>['cart']) => state.billing_address,
  );
  const selectCartShippingAddress = createSelector(
    selectCartValue,
    (state: DaffCartReducerState<T>['cart']) => state.shipping_address,
  );
  const selectCartPayment = createSelector(
    selectCartValue,
    (state: DaffCartReducerState<T>['cart']) => state.payment,
  );
  const selectCartTotals = createSelector(
    selectCartValue,
    (state: DaffCartReducerState<T>['cart']) => state.totals,
  );
  const selectCartShippingInformation = createSelector(
    selectCartValue,
    (state: DaffCartReducerState<T>['cart']) => state.shipping_information,
  );
  const selectCartAvailableShippingMethods = createSelector(
    selectCartValue,
    (state: DaffCartReducerState<T>['cart']) => state.available_shipping_methods,
  );
  const selectCartAvailablePaymentMethods = createSelector(
    selectCartValue,
    (state: DaffCartReducerState<T>['cart']) => state.available_payment_methods,
  );

  const selectIsCartEmpty = createSelector(
    selectCartValue,
    cart => !cart || !cart.items || cart.items.length === 0,
  );
  const selectIsBillingSameAsShipping = createSelector(
    selectCartShippingAddress,
    selectCartBillingAddress,
    (shippingAddress, billingAddress) => daffComparePersonalAddresses(shippingAddress, billingAddress),
  );

  const selectHasBillingAddress = createSelector(
    selectCartBillingAddress,
    billingAddress => !!billingAddress,
  );

  const selectHasShippingAddress = createSelector(
    selectCartShippingAddress,
    shippingAddress => !!shippingAddress,
  );

  const selectHasShippingMethod = createSelector(
    selectCartShippingInformation,
    shippingMethod => !!shippingMethod,
  );

  const selectHasPaymentMethod = createSelector(
    selectCartPayment,
    paymentMethod => !!paymentMethod && paymentMethod.method !== '',
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
      hasPaymentMethod,
    ) => !isCartEmpty
      && hasBillingAddress
      && hasShippingAddress
      && hasShippingMethod
      && hasPaymentMethod,
  );

  return {
    selectCartState,
    selectCartValue,

    selectCartResolved,

    selectCartLoadingObject,
    selectCartFeatureLoading,
    selectCartFeatureResolving,
    selectCartFeatureMutating,
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
    selectItemAdding,
    selectItemResolving,

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
    selectCartDiscountTotals,
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
    selectIsBillingSameAsShipping,

    selectHasBillingAddress,
    selectHasShippingAddress,
    selectHasShippingMethod,
    selectHasPaymentMethod,
    selectCanPlaceOrder,
  };
};

export const getCartSelectors = (() => {
  let cache;
  return <
    T extends DaffCart = DaffCart,
		V extends DaffCartOrderResult = DaffCartOrderResult,
		U extends DaffStatefulCartItem = DaffStatefulCartItem
  >(): DaffCartStateMemoizedSelectors<T> => cache = cache
    ? cache
    : createCartSelectors<T, V, U>();
})();
