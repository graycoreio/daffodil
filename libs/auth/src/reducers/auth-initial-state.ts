import { DaffAuthReducerState } from './auth-reducer-state.interface';
import { DaffAuthToken } from '../models/auth-token';

export const daffAuthInitialState: DaffAuthReducerState<DaffAuthToken> = Object.freeze({
  auth: null,
  loading: false,
  errors: []
});
