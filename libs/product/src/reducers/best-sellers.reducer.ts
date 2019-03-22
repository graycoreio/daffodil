import { BestSellersActionTypes, BestSellersActions } from '../actions/best-sellers.actions';
import { Product } from '../models/product';

/**
 * Interface for fields on best sellers state.
 */
export interface State {
  productIds: string[],
  loading: boolean,
  errors: string[]
}

/**
 * Initial values of the best sellers state.
 */
export const initialState: State = {
  productIds: [],
  loading: false,
  errors: []
};

/**
 * Deep copy of the initial state for reseting best seller state.
 */
export const resetState: State = Object.assign({}, initialState);

/**
 * Reducer function that catches actions and changes/overwrites best seller state.
 * 
 * @param state - Current State of the redux store
 * @param action - A best sellers action
 * @returns Best sellers state
 */
export function reducer(state = initialState, action: BestSellersActions): State {
  switch (action.type) {
    case BestSellersActionTypes.BestSellersLoadAction:
      return {...state, loading: true};
    case BestSellersActionTypes.BestSellersLoadSuccessAction:
      return {...state, loading: false, productIds: getIds(action.payload)};
    case BestSellersActionTypes.BestSellersLoadFailureAction:
      return {...state, 
        loading: false, 
        errors: state.errors.concat(new Array(action.payload))
      };
    case BestSellersActionTypes.BestSellersResetAction:
      return {
        ...resetState
      }
    default:
      return state;
  }
}

/**
 * Selects productIds from state.
 * 
 * @param state - Current redux state object
 * @returns An array of product IDs
 */
export const getBestSellersIds = (state: State) => state.productIds;

/**
 * Selects loading from state.
 * 
 * @param state - Current redux state object
 * @returns A boolean of the loading state
 */
export const getBestSellersLoading = (state: State) => state.loading;

/**
 * Returns ids from an array of Products.
 * 
 * @param products - An array of Products
 * @returns An array of product ID
 */
function getIds(products: Product[]): string[] {
  const ids: string[] = new Array();

  products.forEach(product => {
    ids.push(product.id)
  });

  return ids;
}
