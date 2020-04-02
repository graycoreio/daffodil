import { DaffAuthToken } from '../models/auth-token';

export interface DaffAuthReducerState<T extends DaffAuthToken> {
  auth: T,
  loading: boolean,
  errors: string[]
}
