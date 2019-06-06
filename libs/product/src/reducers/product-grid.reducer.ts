import { ProductGridActionTypes, ProductGridActions } from 'product/src/actions/product-grid.actions';
import { Product } from 'product/src/models/product';

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

export function reducer(state = initialState, action: ProductGridActions): State {
  switch (action.type) {
    case ProductGridActionTypes.ProductGridLoadAction:
      return {...state, loading: true};
    case ProductGridActionTypes.ProductGridLoadSuccessAction:
      return {...state, loading: false};
    case ProductGridActionTypes.ProductGridLoadFailureAction:
      return {...state, 
        loading: false, 
        errors: state.errors.concat(new Array(action.payload))
      };
    default:
      return state;
  }
}

export const getProductGridLoading = (state: State) => state.loading;
