import { DaffAuthLoginReducerState } from './login-reducer-state.interface';

export const daffAuthLoginInitialState: DaffAuthLoginReducerState<any> = {
  auth: null,
  loading: false,
  errors: []
};
