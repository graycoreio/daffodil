import { DaffStateError } from '@daffodil/core/state';

export interface DaffAuthRegisterReducerState {
  loading: boolean;
  errors: DaffStateError[];
}
