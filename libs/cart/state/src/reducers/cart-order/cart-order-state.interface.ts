import { DaffCartOrderResult } from '@daffodil/cart';
import {
  DaffLoadingState,
  DaffStateError,
} from '@daffodil/core/state';

export interface DaffCartOrderReducerState<T extends DaffCartOrderResult = DaffCartOrderResult> {
  cartOrderResult: T;
  loading: DaffLoadingState;
  errors: DaffStateError[];
}
