import { DaffProductActionTypes, ProductActions } from '../actions/product.actions';

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

export const getSelectedProductId = (state: State) => state.selectedProductId;

export const getProductQty = (state: State) => state.qty;

export const getProductLoading = (state: State) => state.loading;
