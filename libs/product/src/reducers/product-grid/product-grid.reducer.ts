import { DaffProductGridActionTypes, DaffProductGridActions } from '../../actions/product-grid.actions';
import { DaffProductGridReducerState } from './product-grid-reducer-state.interface';
import { DaffProduct } from '../../models/product';

/**
 * Initial values of the product grid state.
 */
export const initialState: DaffProductGridReducerState<any> = {
  products: [],
  loading: false,
  errors: []
};

/**
 * Reducer function that catches actions and changes/overwrites product grid state.
 * 
 * @param state current State of the redux store
 * @param action a product grid action
 * @returns Product grid state
 */
export function daffProductGridReducer<T extends DaffProduct>(state = initialState, action: DaffProductGridActions<T>): DaffProductGridReducerState<T> {
  switch (action.type) {
    case DaffProductGridActionTypes.ProductGridLoadAction:
      return {...state, loading: true};
    case DaffProductGridActionTypes.ProductGridLoadSuccessAction:
      return {...state, loading: false};
    case DaffProductGridActionTypes.ProductGridLoadFailureAction:
      return {...state, 
        loading: false, 
        errors: state.errors.concat(new Array(action.payload))
      };
    default:
      return state;
  }
}
