import { ActionReducerMap, createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import { DaffCartItem } from '@daffodil/cart';
import { getDaffCartSelectors } from '@daffodil/cart/state';

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

export const selectProductId: MemoizedSelector<object, DaffCartItem['product_id']> = createSelector(
  addToCartNotificationStateSelector,
  fromDemoAddToCartNotification.getProductId
)

export const selectLoading: MemoizedSelector<object, boolean> = createSelector(
  addToCartNotificationStateSelector,
  fromDemoAddToCartNotification.getLoading
);

export const selectCartItemCount : MemoizedSelector<object, number> = createSelector(
  getDaffCartSelectors().selectCartValue,
  cart => {
    let itemCount = 0;
    if(cart) {
      cart.items.forEach(cartItem => {
        itemCount += cartItem.qty;
      })
    }
    return itemCount;
  }
)
