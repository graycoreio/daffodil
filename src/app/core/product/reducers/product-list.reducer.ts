import { Action } from '@ngrx/store';
import { ProductListActionTypes, ProductListActions } from '@core/product/actions/product-list.actions';
import { Product } from '@core/product/model/product';

export interface State {
  products: Product[],
  loading: boolean,
  errors: string[]
}

export const initialState: State = {
  products: [],
  loading: false,
  errors: []
};

export function reducer(state = initialState, action: ProductListActions): State {
  switch (action.type) {
    case ProductListActionTypes.ProductListLoadAction:
      return {...state, loading: true};
    case ProductListActionTypes.ProductListLoadSuccessAction:
      return {...state, products: action.payload, loading: false};
    case ProductListActionTypes.ProductListLoadFailureAction:
      return {
        ...state, 
        loading: false, 
        errors: state.errors.concat(new Array(action.payload))
      };
    default:
      return state;
  }
}
