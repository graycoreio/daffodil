import {
  DaffCartItemInput,
  DaffCart,
  daffCartItemInputToItemTransform,
} from '@daffodil/cart';
import { DaffOperationEntityState } from '@daffodil/core/state';

import { daffCartItemEntitiesAdapter } from './adapter';
import {
  DaffCartItemActionTypes,
  DaffCartActionTypes,
  DaffCartActions,
  DaffCartItemActions,
} from '../../actions/public_api';

/**
 * Reducer function that catches actions and changes/overwrites product entities state.
 *
 * @param state current State of the redux store
 * @param action CartItemGrid, BestSellers, or CartItem actions
 * @returns CartItem entities state
 */
export function daffCartItemEntitiesReducer<
  T extends DaffCart = DaffCart,
  U extends DaffCartItemInput = DaffCartItemInput,
>(
  state = daffCartItemEntitiesAdapter<T['items'][number]>().getInitialState(),
  action: DaffCartItemActions<T, U> | DaffCartActions<T>,
): DaffOperationEntityState<T['items'][number]> {
  const adapter = daffCartItemEntitiesAdapter<T['items'][number]>();
  switch (action.type) {
    case DaffCartItemActionTypes.CartItemListSuccessAction:
      return adapter.list(action.payload, state);

    case DaffCartItemActionTypes.CartItemLoadSuccessAction:
      return adapter.load(action.payload, state);

    case DaffCartItemActionTypes.CartItemDeleteFailureAction:
    case DaffCartItemActionTypes.CartItemLoadFailureAction:
    case DaffCartItemActionTypes.CartItemUpdateFailureAction:
      return adapter.operationFailed(
        action.itemId,
        action.payload,
        state,
      );

    case DaffCartItemActionTypes.CartItemAddFailureAction:
      return adapter.operationFailed(
        action.placeholderId,
        action.payload,
        state,
      );

    case DaffCartItemActionTypes.CartItemStateResetAction:
      return adapter.resetState(action.itemId, state);

    case DaffCartItemActionTypes.CartItemUpdateAction:
      return adapter.preupdate({
        ...action.changes,
        id: action.itemId,
      }, state);

    case DaffCartItemActionTypes.CartItemDeleteAction:
      return adapter.preremove(action.itemId, state);

    case DaffCartItemActionTypes.CartItemAddAction:
      return adapter.preadd(
        daffCartItemInputToItemTransform(action.input),
        state,
        action.placeholderId,
      );

    case DaffCartActionTypes.CartCreateSuccessAction:
      return adapter.list([], state);

    default:
      return state;
  }
}
