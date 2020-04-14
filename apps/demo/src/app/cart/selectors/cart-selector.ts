import { createSelector, MemoizedSelector, ActionReducerMap } from '@ngrx/store';

import { getDaffCartSelectors, DaffCartReducerState, daffCartReducer } from '@daffodil/cart';

export interface CartState {
  cart: DaffCartReducerState;
}

export const daffCartSelectors = getDaffCartSelectors();

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
  daffCartSelectors.selectCartValue,
  cart => {
    return cart.items.length === 0;
  }
)
