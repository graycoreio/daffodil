import { DaffStateError } from '@daffodil/core/state';

export interface DaffAuthReducerState {
  loading: boolean;
  errors: DaffStateError[];
  loggedIn: boolean;
}
