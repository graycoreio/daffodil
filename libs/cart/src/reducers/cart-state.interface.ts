import { DaffCart } from '../models/cart';

export interface CartState {
  cart: DaffCart,
  loading: boolean,
  errors: string[]
}
