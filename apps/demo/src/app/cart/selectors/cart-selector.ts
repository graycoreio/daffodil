import { createSelector, MemoizedSelector, ActionReducerMap } from '@ngrx/store';

import { DaffCart, getDaffCartSelectors, DaffCartReducerState, daffCartReducer } from '@daffodil/cart';

export interface CartState {
  cart: DaffCartReducerState<DaffCart>;
}

export const daffCartSelectors = getDaffCartSelectors<DaffCart>();

export interface State {
  cart: CartState
}

export const reducers : ActionReducerMap<CartState> = {
  cart: daffCartReducer
}

export const selectCartItemCount : MemoizedSelector<object, number> = createSelector(
  daffCartSelectors.selectCartValue,
  cart => {
    let itemCount = 0;
    cart.items.forEach(cartItem => {
      itemCount += cartItem.qty;
    })
    return itemCount;
  }
)

export const isCartEmpty : MemoizedSelector<object, boolean> = createSelector(
  getDaffCartSelectors<DaffCart>().selectCartValue,
  cart => {
    return cart.items.length === 0;
  }
)
