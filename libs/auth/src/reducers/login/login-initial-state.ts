import { DaffAuthLoginReducerState } from './login-reducer-state.interface';

export const daffAuthLoginInitialState: DaffAuthLoginReducerState<any> = Object.freeze({
  auth: null,
  loading: false,
  errors: []
});
