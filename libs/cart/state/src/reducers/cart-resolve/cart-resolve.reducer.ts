import { DaffCart } from '@daffodil/cart';

import { DaffCartActionTypes } from '../../actions/public_api';
import { ActionTypes } from '../action-types.type';
import { initialState } from '../cart-initial-state';
import { DaffCartReducerState } from '../cart-state.interface';
import { DaffCartResolveState } from './cart-resolve-state.enum';

export function cartResolveReducer<T extends DaffCart = DaffCart>(
  state = initialState,
  action: ActionTypes,
): DaffCartReducerState<T> {
  switch (action.type) {
    case DaffCartActionTypes.ResolveCartAction:
      return {
        ...state,
        resolved: DaffCartResolveState.Resolving,
      };
    case DaffCartActionTypes.ResolveCartServerSideAction:
      return {
        ...state,
        resolved: DaffCartResolveState.ServerSide,
      };
    case DaffCartActionTypes.ResolveCartSuccessAction:
      return {
        ...state,
        resolved: DaffCartResolveState.Succeeded,
      };

    case DaffCartActionTypes.ResolveCartFailureAction:
      return {
        ...state,
        resolved: DaffCartResolveState.Failed,
      };

    default:
      return state;
  }
}
