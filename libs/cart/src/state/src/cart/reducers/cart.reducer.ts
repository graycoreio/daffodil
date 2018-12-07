import { Cart } from '../../../../index';

import { CartActionTypes, CartActions } from '../actions/cart.actions';

export interface State {
  cart: Cart,
  loading: boolean,
  errors: string[]
}

export const initialState: State = Object.freeze({
  cart: null,
  loading: false,
  errors: []
});

export const resetState: State = Object.assign({}, initialState);

export function reducer(state = initialState, action: CartActions): State {
  switch (action.type) {
    case CartActionTypes.CartLoadAction:
    case CartActionTypes.AddToCartAction:
      return {...state, loading: true};
    case CartActionTypes.CartLoadSuccessAction:
    case CartActionTypes.AddToCartSuccessAction:
      return {...state, cart: action.payload, loading: false};
    case CartActionTypes.CartLoadFailureAction:
    case CartActionTypes.AddToCartFailureAction:
      return {...state,
        loading: false,
        errors: state.errors.concat(new Array(action.payload))
      };
    case CartActionTypes.CartResetAction:
      return {
        ...resetState
      }
    default:
      return state;
  }
}

export const getCart = (state: State) => state.cart;

export const getCartLoading = (state: State) => state.loading;
