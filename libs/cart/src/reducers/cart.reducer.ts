import { DaffCartActionTypes, DaffCartActions } from '../actions/cart.actions';
import { DaffCart } from '../models/cart';

export interface State {
  cart: DaffCart,
  loading: boolean,
  errors: string[]
}

export const initialState: State = Object.freeze({
  cart: null,
  loading: false,
  errors: []
});

export function reducer(state = initialState, action: DaffCartActions<DaffCart>): State {
  switch (action.type) {
    case DaffCartActionTypes.CartLoadAction:
    case DaffCartActionTypes.CartResetAction:
    case DaffCartActionTypes.AddToCartAction:
      return { ...state, loading: true };
    case DaffCartActionTypes.CartLoadSuccessAction:
    case DaffCartActionTypes.AddToCartSuccessAction:
      return { ...state, cart: action.payload, loading: false };
    case DaffCartActionTypes.CartLoadFailureAction:
    case DaffCartActionTypes.AddToCartFailureAction:
      return {
        ...state,
        loading: false,
        errors: state.errors.concat(new Array(action.payload))
      };
    case DaffCartActionTypes.CartResetSuccessAction:
      return {
        ...state,
        loading: false,
        cart: {
          ...state.cart,
          items: [],
          ...action.payload
        }
      };
    default:
      return state;
  }
}

export const getCart = (state: State) => state.cart;

export const getCartLoading = (state: State) => state.loading;
