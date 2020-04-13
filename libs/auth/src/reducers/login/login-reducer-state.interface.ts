import { DaffAuthToken } from '../../models/auth-token';

export interface DaffAuthLoginReducerState<T extends DaffAuthToken> {
  auth: T,
  loading: boolean,
  errors: string[]
}
