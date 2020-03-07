import { DaffCart } from '../models/cart';

export interface DaffCartReducerState {
  cart: DaffCart,
  loading: boolean,
  errors: string[]
}
