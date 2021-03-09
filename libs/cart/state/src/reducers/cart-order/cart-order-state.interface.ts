import { DaffCartOrderResult } from '@daffodil/cart';
import {
  DaffStateError,
  DaffMutableLoadingState,
} from '@daffodil/core/state';


export interface DaffCartOrderReducerState<T extends DaffCartOrderResult = DaffCartOrderResult> {
  cartOrderResult: T;
  loading: DaffMutableLoadingState;
  errors: DaffStateError[];
}
