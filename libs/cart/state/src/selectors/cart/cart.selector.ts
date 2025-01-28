import {
  createSelector,
  MemoizedSelector,
  DefaultProjectorFn,
} from '@ngrx/store';

import {
  DaffCart,
  DaffCartTotal,
  DaffCartOrderResult,
  DaffCartTotalTypeEnum,
} from '@daffodil/cart';
import {
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';
import { daffComparePersonalAddresses } from '@daffodil/geography';

import { DaffCartResolveState } from '../../reducers/cart-resolve/cart-resolve-state.enum';
import {
  DaffCartReducerState,
  DaffCartReducersState,
  DaffCartOperationType,
  DaffCartStateRootSlice,
} from '../../reducers/public_api';
import { getDaffCartFeatureSelector } from '../cart-feature.selector';
import { getDaffCartItemEntitiesSelectors } from '../cart-item-entities/cart-item-entities.selectors';

export interface DaffCartStateMemoizedSelectors<
  T extends DaffCart = DaffCart,
  V extends DaffCartOrderResult = DaffCartOrderResult,
> {
  selectCartState: MemoizedSelector<DaffCartStateRootSlice<T, V>, DaffCartReducerState<T>>;
  selectCartValue: MemoizedSelector<DaffCartStateRootSlice<T, V>, T>;

  selectCartResolved: MemoizedSelector<DaffCartStateRootSlice<T, V>, DaffCartResolveState>;

  /**
   * The object that holds all the loading states for cart operations.
   */
  selectCartLoadingObject: MemoizedSelector<DaffCartStateRootSlice<T, V>, DaffCartReducerState<T>['loading']>;
  /**
   * Selects whether there is any cart operation in progress.
   * This includes operations specifically for cart subfields.
   */
  selectCartFeatureLoading: MemoizedSelector<DaffCartStateRootSlice<T, V>, boolean>;
  /**
   * Selects whether there is any cart resolve operation in progress.
   * This includes operations for cart subfields.
   * This pertains only to requests that do not mutate data such as "load" or "list".
   */
  selectCartFeatureResolving: MemoizedSelector<DaffCartStateRootSlice<T, V>, boolean>;
  /**
   * Selects whether there is any cart mutate operation in progress.
   * This includes operations for cart subfields.
   * This pertains only to requests that mutate data such as "update".
   */
  selectCartFeatureMutating: MemoizedSelector<DaffCartStateRootSlice<T, V>, boolean>;
  /**
   * Selects whether there is a cart operation in progress.
   * This does not include operations specifically for cart subfields.
   */
  selectCartLoading: MemoizedSelector<DaffCartStateRootSlice<T, V>, boolean>;
  /**
   * Selects whether there is a cart resolve operation in progress.
   * This does not include operations specifically for cart subfields.
   * This pertains only to requests that do not mutate data such as "load" or "list".
   */
  selectCartResolving: MemoizedSelector<DaffCartStateRootSlice<T, V>, boolean>;
  /**
   * Selects whether there is a cart mutate operation in progress.
   * This does not include operations specifically for cart subfields.
   * This pertains only to requests that mutate data such as "update".
   */
  selectCartMutating: MemoizedSelector<DaffCartStateRootSlice<T, V>, boolean>;
  /**
   * Selects whether there is a cart billing address operation in progress.
   */
  selectBillingAddressLoading: MemoizedSelector<DaffCartStateRootSlice<T, V>, boolean>;
  /**
   * Selects whether there is a cart billing address resolve operation in progress.
   * This pertains only to requests that do not mutate data such as "load" or "list".
   */
  selectBillingAddressResolving: MemoizedSelector<DaffCartStateRootSlice<T, V>, boolean>;
  /**
   * Selects whether there is a cart billing address mutate operation in progress.
   * This pertains only to requests that mutate data such as "update".
   */
  selectBillingAddressMutating: MemoizedSelector<DaffCartStateRootSlice<T, V>, boolean>;
  /**
   * Selects whether there is a cart shipping address operation in progress.
   */
  selectShippingAddressLoading: MemoizedSelector<DaffCartStateRootSlice<T, V>, boolean>;
  /**
   * Selects whether there is a cart shipping address resolve operation in progress.
   * This pertains only to requests that do not mutate data such as "load" or "list".
   */
  selectShippingAddressResolving: MemoizedSelector<DaffCartStateRootSlice<T, V>, boolean>;
  /**
   * Selects whether there is a cart shipping address mutate operation in progress.
   * This pertains only to requests that mutate data such as "update".
   */
  selectShippingAddressMutating: MemoizedSelector<DaffCartStateRootSlice<T, V>, boolean>;
  /**
   * Selects whether there is a cart shipping information operation in progress.
   */
  selectShippingInformationLoading: MemoizedSelector<DaffCartStateRootSlice<T, V>, boolean>;
  /**
   * Selects whether there is a cart shipping information resolve operation in progress.
   * This pertains only to requests that do not mutate data such as "load" or "list".
   */
  selectShippingInformationResolving: MemoizedSelector<DaffCartStateRootSlice<T, V>, boolean>;
  /**
   * Selects whether there is a cart shipping information mutate operation in progress.
   * This pertains only to requests that mutate data such as "update".
   */
  selectShippingInformationMutating: MemoizedSelector<DaffCartStateRootSlice<T, V>, boolean>;
  /**
   * Selects whether there is a cart shipping methods operation in progress.
   */
  selectShippingMethodsLoading: MemoizedSelector<DaffCartStateRootSlice<T, V>, boolean>;
  /**
   * Selects whether there is a cart shipping methods resolve operation in progress.
   * This pertains only to requests that do not mutate data such as "load" or "list".
   */
  selectShippingMethodsResolving: MemoizedSelector<DaffCartStateRootSlice<T, V>, boolean>;
  /**
   * Selects whether there is a cart payment operation in progress.
   */
  selectPaymentLoading: MemoizedSelector<DaffCartStateRootSlice<T, V>, boolean>;
  /**
   * Selects whether there is a cart payment resolve operation in progress.
   * This pertains only to requests that do not mutate data such as "load" or "list".
   */
  selectPaymentResolving: MemoizedSelector<DaffCartStateRootSlice<T, V>, boolean>;
  /**
   * Selects whether there is a cart payment mutate operation in progress.
   * This pertains only to requests that mutate data such as "update".
   */
  selectPaymentMutating: MemoizedSelector<DaffCartStateRootSlice<T, V>, boolean>;
  /**
   * Selects whether there is a cart payment methods operation in progress.
   */
  selectPaymentMethodsLoading: MemoizedSelector<DaffCartStateRootSlice<T, V>, boolean>;
  /**
   * Selects whether there is a cart payment methods resolve operation in progress.
   * This pertains only to requests that do not mutate data such as "load" or "list".
   */
  selectPaymentMethodsResolving: MemoizedSelector<DaffCartStateRootSlice<T, V>, boolean>;
  /**
   * Selects whether there is a cart coupon operation in progress.
   */
  selectCouponLoading: MemoizedSelector<DaffCartStateRootSlice<T, V>, boolean>;
  /**
   * Selects whether there is a cart coupon resolve operation in progress.
   * This pertains only to requests that do not mutate data such as "load" or "list".
   */
  selectCouponResolving: MemoizedSelector<DaffCartStateRootSlice<T, V>, boolean>;
  /**
   * Selects whether there is a cart coupon mutate operation in progress.
   * This pertains only to requests that mutate data such as "update".
   */
  selectCouponMutating: MemoizedSelector<DaffCartStateRootSlice<T, V>, boolean>;
  /**
   * Selects whether there is a cart item operation in progress.
   */
  selectItemLoading: MemoizedSelector<DaffCartStateRootSlice<T, V>, boolean>;
  /**
   * Selects whether there is a cart item add operation in progress.
   */
  selectItemAdding: MemoizedSelector<DaffCartStateRootSlice<T, V>, boolean>;
  /**
   * Selects whether there is a cart item resolve operation in progress.
   * This pertains only to requests that do not mutate data such as "load" or "list".
   */
  selectItemResolving: MemoizedSelector<DaffCartStateRootSlice<T, V>, boolean>;

  /**
   * Selects whether there is a cart item mutate operation in progress.
   * This pertains only to requests that mutate existing data such as update.
   * This does not apply to add requests. see {@link selectItemAdding} for that.
   */
  selectItemMutating: MemoizedSelector<DaffCartStateRootSlice<T, V>, boolean>;

  selectCartErrorsObject: MemoizedSelector<DaffCartStateRootSlice<T, V>, DaffCartReducerState<T>['errors']>;
  selectCartErrors: MemoizedSelector<DaffCartStateRootSlice<T, V>, DaffStateError[]>;
  selectBillingAddressErrors: MemoizedSelector<DaffCartStateRootSlice<T, V>, DaffStateError[]>;
  selectShippingAddressErrors: MemoizedSelector<DaffCartStateRootSlice<T, V>, DaffStateError[]>;
  selectShippingInformationErrors: MemoizedSelector<DaffCartStateRootSlice<T, V>, DaffStateError[]>;
  selectShippingMethodsErrors: MemoizedSelector<DaffCartStateRootSlice<T, V>, DaffStateError[]>;
  selectPaymentErrors: MemoizedSelector<DaffCartStateRootSlice<T, V>, DaffStateError[]>;
  selectPaymentMethodsErrors: MemoizedSelector<DaffCartStateRootSlice<T, V>, DaffStateError[]>;
  selectCouponErrors: MemoizedSelector<DaffCartStateRootSlice<T, V>, DaffStateError[]>;
  selectItemErrors: MemoizedSelector<DaffCartStateRootSlice<T, V>, DaffStateError[]>;

  selectCartHasOutOfStockItems: MemoizedSelector<DaffCartStateRootSlice<T, V>, boolean>;
  selectIsCartEmpty: MemoizedSelector<DaffCartStateRootSlice<T, V>, boolean>;
  /**
   * Selects whether the cart's shipping address equals the billing address.
   * Returns false if either address is null or undefined.
   */
  selectIsBillingSameAsShipping: MemoizedSelector<DaffCartStateRootSlice<T, V>, boolean>;

  selectHasBillingAddress: MemoizedSelector<DaffCartStateRootSlice<T, V>, boolean>;
  selectHasShippingAddress: MemoizedSelector<DaffCartStateRootSlice<T, V>, boolean>;
  selectHasShippingMethod: MemoizedSelector<DaffCartStateRootSlice<T, V>, boolean>;
  selectHasPaymentMethod: MemoizedSelector<DaffCartStateRootSlice<T, V>, boolean>;
  selectCanPlaceOrder: MemoizedSelector<DaffCartStateRootSlice<T, V>, boolean, DefaultProjectorFn<boolean>>;
}

const createCartSelectors = <
  T extends DaffCart = DaffCart,
  V extends DaffCartOrderResult = DaffCartOrderResult,
>(): DaffCartStateMemoizedSelectors<T, V> => {
  const selectCartFeatureState = getDaffCartFeatureSelector<T, V>().selectCartFeatureState;
  const { selectCartItemMutating } = getDaffCartItemEntitiesSelectors<T, V>();
  const selectCartState = createSelector(
    selectCartFeatureState,
    (state: DaffCartReducersState<T, V>) => state.cart,
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
    loadingObject => loadingObject[DaffCartOperationType.Cart] !== DaffState.Stable,
  );
  const selectCartResolving = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.Cart] === DaffState.Resolving,
  );
  const selectCartMutating = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.Cart] === DaffState.Updating,
  );
  const selectBillingAddressLoading = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.BillingAddress] !== DaffState.Stable,
  );
  const selectBillingAddressResolving = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.BillingAddress] === DaffState.Resolving,
  );
  const selectBillingAddressMutating = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.BillingAddress] === DaffState.Updating,
  );
  const selectShippingAddressLoading = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.ShippingAddress] !== DaffState.Stable,
  );
  const selectShippingAddressResolving = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.ShippingAddress] === DaffState.Resolving,
  );
  const selectShippingAddressMutating = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.ShippingAddress] === DaffState.Updating,
  );
  const selectShippingInformationLoading = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.ShippingInformation] !== DaffState.Stable,
  );
  const selectShippingInformationResolving = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.ShippingInformation] === DaffState.Resolving,
  );
  const selectShippingInformationMutating = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.ShippingInformation] === DaffState.Updating,
  );
  const selectShippingMethodsLoading = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.ShippingMethods] !== DaffState.Stable,
  );
  const selectShippingMethodsResolving = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.ShippingMethods] === DaffState.Resolving,
  );
  const selectPaymentLoading = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.Payment] !== DaffState.Stable,
  );
  const selectPaymentResolving = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.Payment] === DaffState.Resolving,
  );
  const selectPaymentMutating = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.Payment] === DaffState.Updating,
  );
  const selectPaymentMethodsLoading = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.PaymentMethods] !== DaffState.Stable,
  );
  const selectPaymentMethodsResolving = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.PaymentMethods] === DaffState.Resolving,
  );
  const selectItemLoading = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.Item] !== DaffState.Stable,
  );
  const selectItemAdding = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.Item] === DaffState.Adding,
  );
  const selectItemResolving = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.Item] === DaffState.Resolving,
  );
  const selectItemMutating = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.Item] === DaffState.Updating,
  );
  const selectCouponLoading = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.Coupon] !== DaffState.Stable,
  );
  const selectCouponResolving = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.Coupon] === DaffState.Resolving,
  );
  const selectCouponMutating = createSelector(
    selectCartLoadingObject,
    loadingObject => loadingObject[DaffCartOperationType.Coupon] === DaffState.Updating,
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
    (loadingObject) => [
      selectCartMutating,
      selectBillingAddressMutating,
      selectShippingAddressMutating,
      selectShippingInformationMutating,
      selectPaymentMutating,
      selectCouponMutating,
      selectItemAdding,
      selectItemMutating,
    ].map(selector =>
      selector.projector(loadingObject),
    ).reduce((acc, mutating) => acc || mutating, false),
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
  const selectCartShippingInformation = createSelector(
    selectCartValue,
    (state: DaffCartReducerState<T>['cart']) => state.shipping_information,
  );

  const selectIsCartEmpty = createSelector(
    selectCartValue,
    cart => !cart || !cart.items || cart.items.length === 0,
  );
  const selectIsBillingSameAsShipping = createSelector(
    selectCartShippingAddress,
    selectCartBillingAddress,
    (shippingAddress, billingAddress) =>
      shippingAddress?.id || billingAddress?.id
        ? shippingAddress?.id === billingAddress?.id
        : daffComparePersonalAddresses(shippingAddress, billingAddress),
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

    selectCartHasOutOfStockItems,

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
  >(): DaffCartStateMemoizedSelectors<T> => cache = cache
    ? cache
    : createCartSelectors<T, V>();
})();
