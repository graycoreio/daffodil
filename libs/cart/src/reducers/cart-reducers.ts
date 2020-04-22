import { daffCartReducer } from './cart.reducer';
import { daffCartOrderReducer } from './cart-order/cart-order.reducer';

export const daffCartReducers = {
  cart: daffCartReducer,
  order: daffCartOrderReducer
}
