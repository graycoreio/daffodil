import { Action } from '@ngrx/store';

import { ProductActionTypes, ProductActions } from '../actions/product.actions';
import { Product } from '../model/product';

export interface State {
  selectedProductId: string,
  loading: boolean,
  errors: string[]
}

export const initialState: State = {
  selectedProductId: null,
  loading: false,
  errors: []
};

export function reducer(state = initialState, action: ProductActions): State {
  switch (action.type) {
    case ProductActionTypes.ProductLoadAction:
      return {...state, loading: true, selectedProductId: action.payload};
    case ProductActionTypes.ProductLoadSuccessAction:
      return {...state, loading: false};
    case ProductActionTypes.ProductLoadFailureAction:
      return {...state, 
        loading: false, 
        errors: state.errors.concat(new Array(action.payload))
      };
    default:
      return state;
  }
}

export const getSelectedProductId = (state: State) => state.selectedProductId;

export const getProductLoading = (state: State) => state.loading;
