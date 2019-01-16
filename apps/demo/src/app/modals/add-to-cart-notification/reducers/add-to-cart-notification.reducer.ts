import { AddToCartNotificationActionTypes, AddToCartNotificationActions } from '../actions/add-to-cart-notification.actions';
import { CartActionTypes, CartActions } from '@daffodil/state';

export interface State {
  open: boolean,
  productQty: number,
  productId: string,
  loading: boolean
}

export const initialState: State = {
  open: false,
  productQty: 0,
  productId: null,
  loading: false
};

const handleAddToCartAction = (state, action) => {
  return {
    ... state, loading: true, productQty: action.payload.qty, productId: action.payload.productId
  }
}

export function reducer(state = initialState, action: AddToCartNotificationActions | CartActions): State {
  switch (action.type) {
    case AddToCartNotificationActionTypes.OpenAddToCartNotificationAction:
      return {...state, open: !state.open};
    case AddToCartNotificationActionTypes.CloseAddToCartNotificationAction:
      return {...state, open: false};
    case CartActionTypes.AddToCartAction:
      return handleAddToCartAction(state, action);
    case CartActionTypes.AddToCartSuccessAction:
      return {...state, loading: false};
    default:
      return state;
  }
}

export const getOpen = (state: State) => state.open;

export const getProductQty = (state: State) => state.productQty;

export const getProductId = (state: State) => state.productId;

export const getLoading = (state: State) => state.loading;
