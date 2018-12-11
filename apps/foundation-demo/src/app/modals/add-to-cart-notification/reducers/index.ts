import { ActionReducerMap, createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import { fromCartReducer, fromCart } from '@daffodil/cart';

import * as fromFoundationAddToCartNotification from './add-to-cart-notification.reducer';

export interface State {
  addToCartNotification: fromFoundationAddToCartNotification.State,
  cart: fromCartReducer.State
}

export const reducers : ActionReducerMap<State> = {
  addToCartNotification: fromFoundationAddToCartNotification.reducer,
  cart: fromCartReducer.reducer
}

/**
 * Foundation AddToCartNotification State
 */
export const selectFoundationAddToCartNotificationState = createFeatureSelector<State>('foundationAddToCartNotification');

/**
 * Foundation AddToCartNotification AddToCartNotification State
 */
export const addToCartNotificationStateSelector = createSelector(
  selectFoundationAddToCartNotificationState,
  (state: State) => state.addToCartNotification
);

export const selectOpen: MemoizedSelector<object, boolean> = createSelector(
  addToCartNotificationStateSelector,
  fromFoundationAddToCartNotification.getOpen
);

export const selectProductQty: MemoizedSelector<object, number> = createSelector(
  addToCartNotificationStateSelector,
  fromFoundationAddToCartNotification.getProductQty
);

export const selectProductId: MemoizedSelector<object, string> = createSelector(
  addToCartNotificationStateSelector,
  fromFoundationAddToCartNotification.getProductId
)

export const selectLoading: MemoizedSelector<object, boolean> = createSelector(
  addToCartNotificationStateSelector,
  fromFoundationAddToCartNotification.getLoading
);

export const selectCartItemCount : MemoizedSelector<object, number> = createSelector(
  fromCart.cartStateSelector,
  cartState => {
    let itemCount: number = 0;
    if(cartState.cart) {
      cartState.cart.items.forEach(cartItem => {
        itemCount += cartItem.qty;
      })
    }
    return itemCount;
  }
)
