import { DaffProductGridActionTypes, DaffProductGridActions } from '../actions/product-grid.actions';
import { DaffProduct } from '../models/product';

export interface State {
  products: DaffProduct[],
  loading: boolean,
  errors: string[]
}

export const initialState: State = {
  products: [],
  loading: false,
  errors: []
};

export function reducer(state = initialState, action: DaffProductGridActions): State {
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

export const getProductGridLoading = (state: State) => state.loading;
