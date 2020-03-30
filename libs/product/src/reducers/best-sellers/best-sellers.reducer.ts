import { DaffBestSellersActionTypes, DaffBestSellersActions } from '../../actions/best-sellers.actions';
import { DaffProduct } from '../../models/product';
import { DaffBestSellersReducerState } from './best-sellers-reducer-state.interface';

export const initialState: DaffBestSellersReducerState = {
  productIds: [],
  loading: false,
  errors: []
};

export const resetState: DaffBestSellersReducerState = Object.assign({}, initialState);

export function reducer(state = initialState, action: DaffBestSellersActions): DaffBestSellersReducerState {
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

export const getBestSellersIds = (state: DaffBestSellersReducerState) => state.productIds;

export const getBestSellersLoading = (state: DaffBestSellersReducerState) => state.loading;

function getIds(products: DaffProduct[]): string[] {
  const ids: string[] = new Array();

  products.forEach(product => {
    ids.push(product.id)
  });

  return ids;
}
