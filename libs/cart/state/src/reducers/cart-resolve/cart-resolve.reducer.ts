import { DaffCart } from '@daffodil/cart';

import { DaffCartResolveState } from './cart-resolve-state.enum';
import { DaffCartActionTypes } from '../../actions/public_api';
import { ActionTypes } from '../action-types.type';
import { daffCartReducerInitialState } from '../cart-initial-state';
import { DaffCartReducerState } from '../cart-state.interface';

export function cartResolveReducer<T extends DaffCart = DaffCart>(
  state = daffCartReducerInitialState,
  action: ActionTypes<T>,
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
    case DaffCartActionTypes.CartLoadSuccessAction:
    case DaffCartActionTypes.CartCreateSuccessAction:
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
