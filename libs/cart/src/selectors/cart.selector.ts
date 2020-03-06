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
