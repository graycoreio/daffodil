import { DaffCartItem } from '@daffodil/cart';
import {
  DaffCartActionTypes,
  DaffCartActions,
  DaffAddToCart,
} from '@daffodil/cart/state';

import {
  AddToCartNotificationActionTypes,
  AddToCartNotificationActions,
} from '../actions/add-to-cart-notification.actions';

export interface State {
  open: boolean;
  productQty: number;
  productId: DaffCartItem['product_id'];
  loading: boolean;
}

export const initialState: State = {
  open: false,
  productQty: 0,
  productId: null,
  loading: false,
};

const handleAddToCartAction = (state: State, action: DaffAddToCart) => ({
  ...state,
  loading: true,
  productQty: action.payload.qty,
  productId: action.payload.productId,
});

export function reducer(state = initialState, action: AddToCartNotificationActions | DaffCartActions): State {
  switch (action.type) {
  case AddToCartNotificationActionTypes.OpenAddToCartNotificationAction:
    return { ...state, open: true };
  case AddToCartNotificationActionTypes.CloseAddToCartNotificationAction:
    return { ...state, open: false };
  case DaffCartActionTypes.AddToCartAction:
    return handleAddToCartAction(state, action);
  case DaffCartActionTypes.AddToCartSuccessAction:
    return { ...state, loading: false };
  default:
    return state;
  }
}

export const getOpen = (state: State) => state.open;

export const getProductQty = (state: State) => state.productQty;

export const getProductId = (state: State) => state.productId;

export const getLoading = (state: State) => state.loading;
