import {
  createSelector,
  MemoizedSelector,
  ActionReducerMap,
} from '@ngrx/store';

import {
  getDaffCartSelectors,
  DaffCartReducerState,
  daffCartReducer,
} from '@daffodil/cart/state';

export interface CartState {
  cart: DaffCartReducerState;
}

export const daffCartSelectors = getDaffCartSelectors();

export interface State {
  cart: CartState;
}

export const reducers: ActionReducerMap<CartState> = {
  cart: daffCartReducer,
};

export const selectCartItemCount: MemoizedSelector<Record<string, any>, number> = createSelector(
  daffCartSelectors.selectCartValue,
  cart => {
    let itemCount = 0;
    cart.items.forEach(cartItem => {
      itemCount += cartItem.qty;
    });
    return itemCount;
  },
);

export const isCartEmpty: MemoizedSelector<Record<string, any>, boolean> = createSelector(
  daffCartSelectors.selectCartValue,
  cart => cart.items.length === 0,
);
