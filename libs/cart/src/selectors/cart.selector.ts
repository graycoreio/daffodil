import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import {
  DaffCartReducersState,
  DaffCartReducerState
} from '../reducers';

/**
 * Cart DaffCartReducersState
 */
export const selectCartState = createFeatureSelector<DaffCartReducersState>('cart');

export const cartStateSelector: MemoizedSelector<object, DaffCartReducersState['cart']> = createSelector(
  selectCartState,
  (state: DaffCartReducersState) => state.cart
)

export const selectCartValue: MemoizedSelector<object, DaffCartReducerState['cart']> = createSelector(
  cartStateSelector,
  (state: DaffCartReducerState) => state.cart
)

export const selectCartLoading: MemoizedSelector<object, DaffCartReducerState['loading']> = createSelector(
  cartStateSelector,
  (state: DaffCartReducerState) => state.loading
)

export const selectCartErrors: MemoizedSelector<object, DaffCartReducerState['errors']> = createSelector(
  cartStateSelector,
  (state: DaffCartReducerState) => state.errors
)

export const selectCartId: MemoizedSelector<object, DaffCartReducerState['cart']['id']> = createSelector(
  selectCartValue,
  (state: DaffCartReducerState['cart']) => state.id
)

export const selectCartSubtotal: MemoizedSelector<object, DaffCartReducerState['cart']['subtotal']> = createSelector(
  selectCartValue,
  (state: DaffCartReducerState['cart']) => state.subtotal
)

export const selectCartGrandTotal: MemoizedSelector<object, DaffCartReducerState['cart']['grand_total']> = createSelector(
  selectCartValue,
  (state: DaffCartReducerState['cart']) => state.grand_total
)

export const selectCartCoupons: MemoizedSelector<object, DaffCartReducerState['cart']['coupons']> = createSelector(
  selectCartValue,
  (state: DaffCartReducerState['cart']) => state.coupons
)

export const selectCartItems: MemoizedSelector<object, DaffCartReducerState['cart']['items']> = createSelector(
  selectCartValue,
  (state: DaffCartReducerState['cart']) => state.items
)

export const selectCartBillingAddress: MemoizedSelector<object, DaffCartReducerState['cart']['billing_address']> = createSelector(
  selectCartValue,
  (state: DaffCartReducerState['cart']) => state.billing_address
)

export const selectCartShippingAddress: MemoizedSelector<object, DaffCartReducerState['cart']['shipping_address']> = createSelector(
  selectCartValue,
  (state: DaffCartReducerState['cart']) => state.shipping_address
)

export const selectCartPayment: MemoizedSelector<object, DaffCartReducerState['cart']['payment']> = createSelector(
  selectCartValue,
  (state: DaffCartReducerState['cart']) => state.payment
)

export const selectCartTotals: MemoizedSelector<object, DaffCartReducerState['cart']['totals']> = createSelector(
  selectCartValue,
  (state: DaffCartReducerState['cart']) => state.totals
)

export const selectCartShippingInformation: MemoizedSelector<object, DaffCartReducerState['cart']['shipping_information']> = createSelector(
  selectCartValue,
  (state: DaffCartReducerState['cart']) => state.shipping_information
)

export const selectCartAvailableShippingMethods: MemoizedSelector<object, DaffCartReducerState['cart']['available_shipping_methods']> = createSelector(
  selectCartValue,
  (state: DaffCartReducerState['cart']) => state.available_shipping_methods
)

export const selectCartAvailablePaymentMethods: MemoizedSelector<object, DaffCartReducerState['cart']['available_payment_methods']> = createSelector(
  selectCartValue,
  (state: DaffCartReducerState['cart']) => state.available_payment_methods
)
