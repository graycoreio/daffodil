import { DaffCartOrderResult } from '../models/cart-order-result';

export interface DaffCartOrderReducerState<T extends DaffCartOrderResult = DaffCartOrderResult> {
  cartOrderResult: T;
  loading: boolean;
  errors: string[];
}
