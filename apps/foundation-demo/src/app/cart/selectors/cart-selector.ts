import { createSelector, MemoizedSelector, ActionReducerMap } from '@ngrx/store';

import { fromCart,fromCartReducer } from '@daffodil/cart';

export interface CartState {
  cart: fromCartReducer.State;
}

export interface State {
  cart: CartState
}

export const reducers : ActionReducerMap<CartState> = {
  cart: fromCartReducer.reducer
}

export const cartHasOneItem : MemoizedSelector<object, boolean> = createSelector(
  fromCart.selectCartValueState,
  cart => {
    if (cart.items.length === 1) {
      return cart.items[0].qty === 1;
    }
    return cart.items.length === 1;
  }
)

export const selectCartItemCount : MemoizedSelector<object, number> = createSelector(
  fromCart.selectCartValueState,
  cart => {
    let itemCount: number = 0;
    cart.items.forEach(cartItem => {
      itemCount += cartItem.qty;
    })
    return itemCount;
  }
)

export const isCartEmpty : MemoizedSelector<object, boolean> = createSelector(
  fromCart.selectCartValueState,
  cart => {
    return cart.items.length === 0;
  }
)
