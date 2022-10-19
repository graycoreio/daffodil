import { ActionReducerMap } from '@ngrx/store';

import { DaffUpsellProductsReducersState } from './reducers-state.interface';
import { daffUpsellProductsReducer } from './upsell-products/reducer';

/**
 * Returns state values from all upsell product reducers.
 */
export const daffUpsellProductsReducers: ActionReducerMap<DaffUpsellProductsReducersState> = {
  upsellProducts: daffUpsellProductsReducer,
};
