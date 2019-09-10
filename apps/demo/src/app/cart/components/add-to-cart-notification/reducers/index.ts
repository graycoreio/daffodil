import { ActionReducerMap, createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import { fromCart } from '@daffodil/cart';

import * as fromDemoAddToCartNotification from './add-to-cart-notification.reducer';

export interface State {
  addToCartNotification: fromDemoAddToCartNotification.State,
}

export const reducers : ActionReducerMap<State> = {
  addToCartNotification: fromDemoAddToCartNotification.reducer,
}

/**
 * Demo AddToCartNotification State
 */
export const selectDemoAddToCartNotificationState = createFeatureSelector<State>('demoAddToCartNotification');

/**
 * Demo AddToCartNotification AddToCartNotification State
 */
export const addToCartNotificationStateSelector = createSelector(
  selectDemoAddToCartNotificationState,
  (state: State) => state.addToCartNotification
);

export const selectOpen: MemoizedSelector<object, boolean> = createSelector(
  addToCartNotificationStateSelector,
  fromDemoAddToCartNotification.getOpen
);

export const selectProductQty: MemoizedSelector<object, number> = createSelector(
  addToCartNotificationStateSelector,
  fromDemoAddToCartNotification.getProductQty
);

export const selectProductId: MemoizedSelector<object, string> = createSelector(
  addToCartNotificationStateSelector,
  fromDemoAddToCartNotification.getProductId
)

export const selectLoading: MemoizedSelector<object, boolean> = createSelector(
  addToCartNotificationStateSelector,
  fromDemoAddToCartNotification.getLoading
);

export const selectCartItemCount : MemoizedSelector<object, number> = createSelector(
  fromCart.cartStateSelector,
  cartState => {
    let itemCount = 0;
    if(cartState.cart) {
      cartState.cart.items.forEach(cartItem => {
        itemCount += cartItem.qty;
      })
    }
    return itemCount;
  }
)
