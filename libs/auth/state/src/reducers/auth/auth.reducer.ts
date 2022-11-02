import {
  DaffAuthActionTypes,
  DaffAuthActions,
} from '../../actions/public_api';
import { daffAuthInitialState } from './auth-initial-state';
import { DaffAuthReducerState } from './auth-reducer-state.interface';

export function daffAuthReducer(
  state = daffAuthInitialState,
  action: DaffAuthActions,
): DaffAuthReducerState {
  switch (action.type) {
    case DaffAuthActionTypes.AuthCheckAction:
      return {
        ...state,
        loading: true,
      };

    case DaffAuthActionTypes.AuthCheckSuccessAction:
      return {
        ...state,
        loading: false,
        errors: [],
      };

    case DaffAuthActionTypes.AuthCheckFailureAction:
      return {
        ...state,
        loading: false,
        errors: [action.errorMessage],
      };

    default:
      return state;
  }
}
