import { daffCartItemEntitiesReducer } from './cart-item-entities/cart-item-entities.reducer';
import { daffCartOrderReducer } from './cart-order/cart-order.reducer';
import { daffCartReducer } from './cart.reducer';

export const daffCartReducers = {
  cart: daffCartReducer,
  cartItems: daffCartItemEntitiesReducer,
  order: daffCartOrderReducer,
};
