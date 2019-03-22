import { ProductActionTypes, ProductActions } from '../actions/product.actions';

/**
 * Interface for fields on product state.
 */
export interface State {
  selectedProductId: string,
  qty: number,
  loading: boolean,
  errors: string[]
}

/**
 * Initial values of the product state.
 */
export const initialState: State = {
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

/**
 * Selects ID of the selected product.
 * 
 * @param state current redux state object
 */
export const getSelectedProductId = (state: State) => state.selectedProductId;

/**
 * Selects the product's quantity.
 * 
 * @param state current redux state object
 */
export const getProductQty = (state: State) => state.qty;

/**
 * Selects the loading status of product state.
 * 
 * @param state current redux state object
 */
export const getProductLoading = (state: State) => state.loading;
