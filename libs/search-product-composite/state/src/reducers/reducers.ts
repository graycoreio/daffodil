import { ActionReducerMap } from '@ngrx/store';

import { DaffCompositeProductReducersState } from '@daffodil/product-composite/state';

import { daffSearchProductCompositeEntitiesReducer } from './composite-product-entities.reducer';

/**
 * The reducers for the entire search feature state.
 */
export const daffSearchProductCompositeReducers: ActionReducerMap<DaffCompositeProductReducersState> = {
  compositeProductOptions: daffSearchProductCompositeEntitiesReducer,
};
