import { DaffStateError } from '@daffodil/core/state';

export interface DaffPaypalReducerState {
  loading: boolean;
  error: DaffStateError;
}
