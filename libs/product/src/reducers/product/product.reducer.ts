import { DaffProductReducerState } from './product-reducer-state.interface';
import { DaffProductActionTypes, DaffProductActions } from '../../actions/product.actions';
import { DaffProduct } from '../../models/product';

/**
 * Initial values of the product state.
 */
export const initialState: DaffProductReducerState = {
  selectedProductId: null,
  qty: 1,
  loading: false,
  errors: []
};

/**
 * Reducer function that catches actions and changes/overwrites product state.
 * 
 * @param state current State of the redux store
 * @param action a product action
 * @returns product state
 */
export function daffProductReducer<T extends DaffProduct>(state = initialState, action: DaffProductActions<T>): DaffProductReducerState {
  switch (action.type) {
    case DaffProductActionTypes.ProductLoadAction:
      return {...state, loading: true, selectedProductId: action.payload};
    case DaffProductActionTypes.ProductLoadSuccessAction:
      return {...state, loading: false};
    case DaffProductActionTypes.ProductLoadFailureAction:
      return {...state, 
        loading: false, 
        errors: state.errors.concat(new Array(action.payload))
      };
    case DaffProductActionTypes.UpdateQtyAction:
      return {...state, qty: action.payload}
    default:
      return state;
  }
}
