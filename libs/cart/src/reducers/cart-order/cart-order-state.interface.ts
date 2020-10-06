import { DaffLoadingState } from '@daffodil/core';
import { DaffCartOrderResult } from '../../models/cart-order-result';

export interface DaffCartOrderReducerState<T extends DaffCartOrderResult = DaffCartOrderResult> {
  cartOrderResult: T;
  loading: DaffLoadingState;
  errors: string[];
}
