import { DaffAuthReducerState } from './auth-reducer-state.interface';

export const daffAuthInitialState: DaffAuthReducerState = Object.freeze({
  loading: false,
  errors: []
});
