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

export const resetState: State = Object.assign({}, initialState);

export function reducer(state = initialState, action: DaffCartActions): State {
  switch (action.type) {
    case DaffCartActionTypes.CartLoadAction:
    case DaffCartActionTypes.AddToCartAction:
      return {...state, loading: true};
    case DaffCartActionTypes.CartLoadSuccessAction:
    case DaffCartActionTypes.AddToCartSuccessAction:
      return {...state, cart: action.payload, loading: false};
    case DaffCartActionTypes.CartLoadFailureAction:
    case DaffCartActionTypes.AddToCartFailureAction:
      return {...state,
        loading: false,
        errors: state.errors.concat(new Array(action.payload))
      };
    case DaffCartActionTypes.CartResetAction:
      return {
        ...resetState
      }
    default:
      return state;
  }
}

export const getCart = (state: State) => state.cart;

export const getCartLoading = (state: State) => state.loading;
