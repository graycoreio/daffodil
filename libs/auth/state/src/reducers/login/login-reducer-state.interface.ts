import { DaffStateError } from '@daffodil/core/state';

export interface DaffAuthLoginReducerState {
  loading: boolean;
  errors: DaffStateError[];
}
