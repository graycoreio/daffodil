import { DaffBestSellersActionTypes, DaffBestSellersActions } from '../../actions/best-sellers.actions';
import { DaffProduct } from '../../models/product';
import { DaffBestSellersReducerState } from './best-sellers-reducer-state.interface';

export const initialState: DaffBestSellersReducerState = {
  productIds: [],
  loading: false,
  errors: []
};

export const resetState: DaffBestSellersReducerState = Object.assign({}, initialState);

export function daffBestSellersReducer<T extends DaffProduct>(state = initialState, action: DaffBestSellersActions<T>): DaffBestSellersReducerState {
  switch (action.type) {
    case DaffBestSellersActionTypes.BestSellersLoadAction:
      return {...state, loading: true};
    case DaffBestSellersActionTypes.BestSellersLoadSuccessAction:
      return {...state, loading: false, productIds: getIds<T>(action.payload)};
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

function getIds<T extends DaffProduct>(products: T[]): string[] {
  const ids: string[] = new Array();

  products.forEach(product => {
    ids.push(product.id)
  });

  return ids;
}
