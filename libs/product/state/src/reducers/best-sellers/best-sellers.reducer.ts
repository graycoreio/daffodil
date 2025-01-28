import { DaffProduct } from '@daffodil/product';

import { DaffBestSellersReducerState } from './best-sellers-reducer-state.interface';
import {
  DaffBestSellersActionTypes,
  DaffBestSellersActions,
} from '../../actions/best-sellers.actions';

/**
 * @deprecated in favor of features from `@daffodil/related-products/state` and `@daffodil/upsell-products/state`. Deprecated in version 0.81.0. Will be removed in version 0.84.0.
 */
export const initialState: DaffBestSellersReducerState = {
  productIds: [],
  loading: false,
  errors: [],
};

export const resetState: DaffBestSellersReducerState = Object.assign({}, initialState);

/**
 * The default best sellers reducer provided by Daffodil.
 * @deprecated in favor of features from `@daffodil/related-products/state` and `@daffodil/upsell-products/state`. Deprecated in version 0.81.0. Will be removed in version 0.84.0.
 */
export function daffBestSellersReducer<T extends DaffProduct>(state = initialState, action: DaffBestSellersActions<T>): DaffBestSellersReducerState {
  switch (action.type) {
    case DaffBestSellersActionTypes.BestSellersLoadAction:
      return { ...state, loading: true };
    case DaffBestSellersActionTypes.BestSellersLoadSuccessAction:
      return { ...state, loading: false, productIds: getIds<T>(action.payload) };
    case DaffBestSellersActionTypes.BestSellersLoadFailureAction:
      return { ...state,
        loading: false,
        errors: state.errors.concat(new Array(action.payload)) };
    case DaffBestSellersActionTypes.BestSellersResetAction:
      return {
        ...resetState,
      };
    default:
      return state;
  }
}

function getIds<T extends DaffProduct>(products: T[]): T['id'][] {
  const ids: T['id'][] = [];

  products.forEach(product => {
    ids.push(product.id);
  });

  return ids;
}
