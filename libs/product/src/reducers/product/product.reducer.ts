import {
  DaffProductPageActions,
  DaffProductPageActionTypes,
} from '../../actions/product-page.actions';
import { DaffProduct } from '../../models/product';
import { DaffProductReducerState } from './product-reducer-state.interface';

/**
 * Initial values of the product state.
 */
export const initialState: DaffProductReducerState = {
  selectedProductId: null,
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
export function daffProductReducer<T extends DaffProduct>(state = initialState, action: DaffProductPageActions<T>): DaffProductReducerState {
  switch (action.type) {
    case DaffProductPageActionTypes.ProductPageLoadAction:
      return { ...state, loading: true, selectedProductId: action.payload };
    case DaffProductPageActionTypes.ProductPageLoadSuccessAction:
      return { ...state, loading: false };
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
