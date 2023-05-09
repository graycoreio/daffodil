import {
  daffCompleteOperation,
  daffOperationFailed,
  daffOperationInitialState,
  daffStartResolution,
} from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';

import {
  DaffProductPageActions,
  DaffProductPageActionTypes,
} from '../../actions/public_api';
import { DaffProductReducerState } from './product-reducer-state.interface';

/**
 * Initial values of the product state.
 */
export const daffProductReducerInitialState: DaffProductReducerState = {
  ...daffOperationInitialState,
  currentProductId: null,
  qty: 1,
};

/**
 * Reducer function that catches actions and changes/overwrites product state.
 *
 * @param state current State of the redux store
 * @param action a product action
 * @returns product state
 */
export function daffProductReducer<T extends DaffProduct>(state = daffProductReducerInitialState, action: DaffProductPageActions<T>): DaffProductReducerState {
  switch (action.type) {
    case DaffProductPageActionTypes.ProductPageLoadAction:
    case DaffProductPageActionTypes.ProductPageLoadByUrlAction:
      return daffStartResolution(state);

    case DaffProductPageActionTypes.ProductPageLoadSuccessAction:
      return { ...daffCompleteOperation(state), currentProductId: action.payload.id };

    case DaffProductPageActionTypes.ProductPageLoadFailureAction:
      return daffOperationFailed([action.payload], state);

    case DaffProductPageActionTypes.UpdateQtyAction:
      return { ...state, qty: action.payload };

    default:
      return state;
  }
}
