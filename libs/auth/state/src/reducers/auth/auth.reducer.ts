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
    case DaffAuthActionTypes.AuthServerSideAction:
    case DaffAuthActionTypes.AuthStorageFailureAction:
      return {
        ...state,
        loading: false,
        errors: [action.errorMessage],
      };

    case DaffAuthActionTypes.AuthCompleteAction:
      return {
        ...state,
        loggedIn: true,
      };

    case DaffAuthActionTypes.AuthRevokeAction:
      return {
        ...state,
        loggedIn: false,
      };

    default:
      return state;
  }
}
