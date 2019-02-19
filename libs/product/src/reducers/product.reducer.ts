import { ProductActionTypes, ProductActions } from '../actions/product.actions';

export interface State {
  selectedProductId: string,
  qty: number,
  loading: boolean,
  errors: string[]
}

export const initialState: State = {
  selectedProductId: null,
  qty: 1,
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
    case ProductActionTypes.UpdateQtyAction:
      return {...state, qty: action.payload}
    default:
      return state;
  }
}

export const getSelectedProductId = (state: State) => state.selectedProductId;

export const getProductQty = (state: State) => state.qty;

export const getProductLoading = (state: State) => state.loading;
