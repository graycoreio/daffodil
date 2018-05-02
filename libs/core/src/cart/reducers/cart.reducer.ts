import { Action } from '@ngrx/store';

import { CartActionTypes, CartActions } from '../actions/cart.actions';
import { Cart } from '../model/cart';

export interface State {
  cart: Cart,
  loading: boolean,
  errors: string[]
}

export const initialState: State = {
  cart: null,
  loading: false,
  errors: []
};

export function reducer(state = initialState, action: CartActions): State {
  switch (action.type) {
    case CartActionTypes.CartLoadAction:
      return {...state, loading: true};
    case CartActionTypes.CartLoadSuccessAction:
      return {...state, loading: false};
    case CartActionTypes.CartLoadFailureAction:
      return {...state, 
        loading: false, 
        errors: state.errors.concat(new Array(action.payload))
      };
    default:
      return state;
  }
}

export const getCartLoading = (state: State) => state.loading;
