import { DaffStateError } from '@daffodil/core/state';

export interface DaffOrderReducerState {
  loading: boolean;
  errors: DaffStateError[];
}
