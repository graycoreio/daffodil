import { createSelector, MemoizedSelector, ActionReducerMap } from '@ngrx/store';

import { fromCartReducer, DaffCart, getDaffCartSelectors } from '@daffodil/cart';

export interface CartState {
  cart: fromCartReducer.State<DaffCart>;
}

export interface State {
  cart: CartState
}

export const reducers : ActionReducerMap<CartState> = {
  cart: fromCartReducer.reducer
}

export const selectCartItemCount : MemoizedSelector<object, number> = createSelector(
  getDaffCartSelectors<DaffCart>().selectCartValue,
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
