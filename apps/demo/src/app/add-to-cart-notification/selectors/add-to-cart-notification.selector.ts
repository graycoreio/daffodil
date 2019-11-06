import { createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import { fromCart } from '@daffodil/cart';

import * as fromDemoAddToCartNotification from '../reducers/add-to-cart-notification.reducer';
import { State } from '../reducers/add-to-cart-notification.reducer';

export const demoAddToCartNotificationFeatureKey = 'demoAddToCartNotification';

/**
 * Demo AddToCartNotification State
 */
export const selectDemoAddToCartNotificationState = createFeatureSelector<State>(demoAddToCartNotificationFeatureKey);

/**
 * Demo AddToCartNotification AddToCartNotification State
 */
export const addToCartNotificationStateSelector = createSelector(
  selectDemoAddToCartNotificationState,
  (state: State) => state
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
