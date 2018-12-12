import { Product } from '@daffodil/product';

import { BestSellersActionTypes, BestSellersActions } from '../actions/best-sellers.actions';

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

export const getBestSellersIds = (state: State) => state.productIds;

export const getBestSellersLoading = (state: State) => state.loading;

function getIds(products: Product[]): string[] {
  let ids: string[] = new Array();

  products.forEach(product => {
    ids.push(product.id)
  });

  return ids;
}
