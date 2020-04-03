import { DaffAuthReducerState } from './auth-reducer-state.interface';
import { DaffAuthToken } from '../models/auth-token';

export const daffAuthInitialState: DaffAuthReducerState<any> = Object.freeze({
  auth: null,
  loading: false,
  errors: []
});
