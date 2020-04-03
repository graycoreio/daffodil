import { DaffAuthRegisterReducerState } from './register-reducer-state.interface';

export const daffAuthRegisterInitialState: DaffAuthRegisterReducerState = Object.freeze({
  loading: false,
  errors: []
});
