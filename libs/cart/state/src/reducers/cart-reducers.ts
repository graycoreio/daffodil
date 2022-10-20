import { ActionReducerMap } from '@ngrx/store';

import { daffCartItemEntitiesReducer } from './cart-item-entities/cart-item-entities.reducer';
import { daffCartOrderReducer } from './cart-order/cart-order.reducer';
import { DaffCartReducersState } from './cart-reducers-state.interface';
import { daffCartReducer } from './cart.reducer';

export const daffCartReducers: ActionReducerMap<DaffCartReducersState> = {
  cart: daffCartReducer,
  cartItems: daffCartItemEntitiesReducer,
  order: daffCartOrderReducer,
};
