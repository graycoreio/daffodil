import { ActionReducerMap } from '@ngrx/store';

import { DaffCartReducersState } from '@daffodil/cart/state';
import { daffIdentityReducer } from '@daffodil/core/state';

import { daffCartStoreCreditCartReducer } from './cart.reducer';
import { DaffCartStoreCreditActions } from '../actions/public_api';

export const daffCartStoreCreditCartReducers: ActionReducerMap<DaffCartReducersState, DaffCartStoreCreditActions> = {
  cart: daffCartStoreCreditCartReducer,
  // we shouldn't need to update cart items when store credit changes, right?
  cartItems: daffIdentityReducer,
  order: daffIdentityReducer,
};
