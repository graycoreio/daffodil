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
  currentProductId: null,
  qty: 1,
  loading: false,
  errors: [],
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
      return { ...state, loading: true, currentProductId: null };
    case DaffProductPageActionTypes.ProductPageLoadSuccessAction:
      return { ...state, loading: false, currentProductId: action.payload.id };
    case DaffProductPageActionTypes.ProductPageLoadFailureAction:
      return { ...state,
        loading: false,
        errors: state.errors.concat(new Array(action.payload)) };
    case DaffProductPageActionTypes.UpdateQtyAction:
      return { ...state, qty: action.payload };
    default:
      return state;
  }
}
