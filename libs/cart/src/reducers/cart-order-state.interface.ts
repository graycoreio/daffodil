import { DaffCartOrderResult } from '../models/cart-order-result';

export interface DaffCartOrderReducerState<T extends DaffCartOrderResult = DaffCartOrderResult> {
  order: T;
  loading: boolean;
  errors: string[];
}
