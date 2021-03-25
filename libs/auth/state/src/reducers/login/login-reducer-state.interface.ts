import { DaffAuthToken } from '@daffodil/auth';
import { DaffStateError } from '@daffodil/core/state';

export interface DaffAuthLoginReducerState<T extends DaffAuthToken = DaffAuthToken> {
  auth: T;
  loading: boolean;
  errors: DaffStateError[];
}
