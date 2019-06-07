import { DaffBestSellersActionTypes, DaffBestSellersActions } from '../actions/best-sellers.actions';
import { DaffProduct } from '../models/product';

export interface State {
  productIds: string[],
  loading: boolean,
  errors: string[]
}

export const initialState: State = {
  productIds: [],
  loading: false,
  errors: []
};

export const resetState: State = Object.assign({}, initialState);

export function reducer(state = initialState, action: DaffBestSellersActions): State {
  switch (action.type) {
    case DaffBestSellersActionTypes.BestSellersLoadAction:
      return {...state, loading: true};
    case DaffBestSellersActionTypes.BestSellersLoadSuccessAction:
      return {...state, loading: false, productIds: getIds(action.payload)};
    case DaffBestSellersActionTypes.BestSellersLoadFailureAction:
      return {...state, 
        loading: false, 
        errors: state.errors.concat(new Array(action.payload))
      };
    case DaffBestSellersActionTypes.BestSellersResetAction:
      return {
        ...resetState
      }
    default:
      return state;
  }
}

export const getBestSellersIds = (state: State) => state.productIds;

export const getBestSellersLoading = (state: State) => state.loading;

function getIds(products: DaffProduct[]): string[] {
  const ids: string[] = new Array();

  products.forEach(product => {
    ids.push(product.id)
  });

  return ids;
}
