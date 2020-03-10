import { ActionReducerMap } from '@ngrx/store';

import { daffCartReducer } from './cart.reducer';
import { DaffCartReducersState } from './cart-reducers-state.interface';

export const daffCartReducers: ActionReducerMap<DaffCartReducersState> = {
  cart: daffCartReducer
}
