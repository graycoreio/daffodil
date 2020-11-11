import { DaffLoadingState } from '@daffodil/core/state';
import { DaffCartOrderResult } from '@daffodil/cart';

export interface DaffCartOrderReducerState<T extends DaffCartOrderResult = DaffCartOrderResult> {
  cartOrderResult: T;
  loading: DaffLoadingState;
  errors: string[];
}
