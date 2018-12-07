import { ActionReducerMap, createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import * as fromCart from './cart.reducer';
import { Cart } from '@daffodil/core';

export interface CartState {
  cart: fromCart.State;
}

export interface State {
  cart: CartState
}

export const reducers : ActionReducerMap<CartState> = {
  cart: fromCart.reducer
}

/**
 * Cart State
 */
export const selectCartState = createFeatureSelector<CartState>('cart');

export const cartStateSelector = createSelector(
  selectCartState,
  (state: CartState) => state.cart
)

export const selectCartValueState : MemoizedSelector<object, Cart> = createSelector(
  cartStateSelector,
  fromCart.getCart
)

export const selectCartLoadingState : MemoizedSelector<object, boolean> = createSelector(
  cartStateSelector,
  fromCart.getCartLoading
)
