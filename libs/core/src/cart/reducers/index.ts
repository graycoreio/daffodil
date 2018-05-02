import { ActionReducerMap, createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity/src/models';

import * as fromCartEntities from './cart-entities.reducer';
import * as fromCart from './cart.reducer';

import { Cart } from '../model/cart';

export interface CartState {
  cartEntities : fromCartEntities.State;
  cartLoading: fromCart.State;
}

export interface State {
  cart: CartState
}

export const reducers : ActionReducerMap<CartState> = {
  cartEntities: fromCartEntities.reducer,
  cartLoading: fromCart.reducer
}

/**
 * Cart State
 */
export const selectCartState = createFeatureSelector<CartState>('cart');

/**
 * Entities
 */
export const selectCartEntitiesState = createSelector(
  selectCartState,
  (state: CartState) => state.cartEntities
)

/**
 * Adapters created with @ngrx/entity generate
 * commonly used selector functions including
 * getting all ids in the record set, a dictionary
 * of the records by id, an array of records and
 * the total number of records. This reduces boilerplate
 * in selecting records from the entity state.
 */
export const {
  selectIds: selectCartIds,
  selectEntities: selectCartEntities,
  selectAll: selectAllCarts,
  selectTotal: selectTotalCarts
} = fromCartEntities.cartAdapter.getSelectors(selectCartEntitiesState);


export const cartLoadingStateSelector = createSelector(
  selectCartState,
  (state: CartState) => state.cartLoading
)

export const selectCartLoadingState : MemoizedSelector<object, boolean> = createSelector(
  cartLoadingStateSelector,
  fromCart.getCartLoading
)
