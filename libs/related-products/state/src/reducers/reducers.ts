import { ActionReducerMap } from '@ngrx/store';

import { DaffRelatedProductsReducersState } from './reducers-state.interface';
import { daffRelatedProductsReducer } from './related-products/reducer';

/**
 * Returns state values from all related product reducers.
 */
export const daffRelatedProductsReducers: ActionReducerMap<DaffRelatedProductsReducersState> = {
  relatedProducts: daffRelatedProductsReducer,
};
