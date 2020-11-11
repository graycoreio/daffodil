import { DaffCart } from '@daffodil/cart';

import {
  DaffCartActionTypes,
} from '../../actions/public_api';
import { initialState } from '../cart-initial-state';
import { DaffCartReducerState } from '../cart-state.interface';
import { ActionTypes } from '../action-types.type';

export function cartResolveReducer<T extends DaffCart = DaffCart>(
  state = initialState,
  action: ActionTypes
): DaffCartReducerState<T> {
  switch (action.type) {
    case DaffCartActionTypes.ResolveCartAction:
      return {
        ...state,
        resolved: false
      };

    case DaffCartActionTypes.ResolveCartSuccessAction:
    case DaffCartActionTypes.ResolveCartFailureAction:
      return {
        ...state,
        resolved: true
      };

    default:
      return state;
  }
}
