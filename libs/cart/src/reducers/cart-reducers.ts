import { ActionReducerMap } from '@ngrx/store';

import { reducer } from './cart.reducer';
import { State } from './cart-reducers-state.interface';

export const reducers: ActionReducerMap<State> = {
  cart: reducer
}
