import { ActionReducerMap } from '@ngrx/store';

import { daffCartItemEntitiesReducer } from './cart-item-entities/cart-item-entities.reducer';
import { daffCartOrderReducer } from './cart-order/cart-order.reducer';
import { DaffCartReducerState } from './cart-state.interface';
import { daffCartReducer } from './cart.reducer';

export const daffCartReducers: ActionReducerMap<DaffCartReducerState> = {
  cart: daffCartReducer,
  cartItems: daffCartItemEntitiesReducer,
  order: daffCartOrderReducer,
};
