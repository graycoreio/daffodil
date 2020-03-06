import { CartState } from './cart-state.interface';

export const initialState: CartState = Object.freeze({
  cart: null,
  loading: false,
  errors: []
});
