import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import {
  State,
  CartState
} from '../reducers';

/**
 * Cart State
 */
export const selectCartState = createFeatureSelector<State>('cart');

export const cartStateSelector: MemoizedSelector<object, State['cart']> = createSelector(
  selectCartState,
  (state: State) => state.cart
)

export const selectCartValue: MemoizedSelector<object, CartState['cart']> = createSelector(
  cartStateSelector,
  (state: CartState) => state.cart
)

export const selectCartLoading: MemoizedSelector<object, CartState['loading']> = createSelector(
  cartStateSelector,
  (state: CartState) => state.loading
)

export const selectCartErrors: MemoizedSelector<object, CartState['errors']> = createSelector(
  cartStateSelector,
  (state: CartState) => state.errors
)

export const selectCartId: MemoizedSelector<object, CartState['cart']['id']> = createSelector(
  selectCartValue,
  (state: CartState['cart']) => state.id
)

export const selectCartSubtotal: MemoizedSelector<object, CartState['cart']['subtotal']> = createSelector(
  selectCartValue,
  (state: CartState['cart']) => state.subtotal
)

export const selectCartGrandTotal: MemoizedSelector<object, CartState['cart']['grand_total']> = createSelector(
  selectCartValue,
  (state: CartState['cart']) => state.grand_total
)

export const selectCartCoupons: MemoizedSelector<object, CartState['cart']['coupons']> = createSelector(
  selectCartValue,
  (state: CartState['cart']) => state.coupons
)

export const selectCartItems: MemoizedSelector<object, CartState['cart']['items']> = createSelector(
  selectCartValue,
  (state: CartState['cart']) => state.items
)

export const selectCartBillingAddress: MemoizedSelector<object, CartState['cart']['billing_address']> = createSelector(
  selectCartValue,
  (state: CartState['cart']) => state.billing_address
)

export const selectCartShippingAddress: MemoizedSelector<object, CartState['cart']['shipping_address']> = createSelector(
  selectCartValue,
  (state: CartState['cart']) => state.shipping_address
)

export const selectCartPayment: MemoizedSelector<object, CartState['cart']['payment']> = createSelector(
  selectCartValue,
  (state: CartState['cart']) => state.payment
)

export const selectCartTotals: MemoizedSelector<object, CartState['cart']['totals']> = createSelector(
  selectCartValue,
  (state: CartState['cart']) => state.totals
)

export const selectCartShippingInformation: MemoizedSelector<object, CartState['cart']['shipping_information']> = createSelector(
  selectCartValue,
  (state: CartState['cart']) => state.shipping_information
)

export const selectCartAvailableShippingMethods: MemoizedSelector<object, CartState['cart']['available_shipping_methods']> = createSelector(
  selectCartValue,
  (state: CartState['cart']) => state.available_shipping_methods
)

export const selectCartAvailablePaymentMethods: MemoizedSelector<object, CartState['cart']['available_payment_methods']> = createSelector(
  selectCartValue,
  (state: CartState['cart']) => state.available_payment_methods
)
