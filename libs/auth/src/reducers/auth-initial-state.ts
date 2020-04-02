import { DaffAuthReducerState } from './auth-reducer-state.interface';

export const daffAuthInitialState: DaffAuthReducerState<any> = Object.freeze({
  auth: null,
  loading: false,
  errors: []
});
