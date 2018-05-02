import { Action } from '@ngrx/store';
import { CartActionTypes, CartActions } from '../actions/cart.actions';
import { Cart } from '../model/cart';
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';

export const cartAdapter : EntityAdapter<Cart> = createEntityAdapter<Cart>();

export interface State extends EntityState<Cart> { } 

export const initialState: State = cartAdapter.getInitialState();

export function reducer(state = initialState, action: CartActions): State {
  switch (action.type) {
    case CartActionTypes.CartLoadSuccessAction:
      return cartAdapter.upsertOne({
        id: action.payload.id, changes: {...action.payload}
      }, state);
    case CartActionTypes.CartResetAction:
      return cartAdapter.removeAll(state);
    default:
      return state;
  }
}
