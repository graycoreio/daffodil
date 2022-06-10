import { ActionReducerMap } from '@ngrx/store';

import { DaffConfigurableProductReducersState } from '@daffodil/product-configurable/state';

import { daffSearchProductConfigurableProductEntitiesReducer } from './configurable-product-entities.reducer';

/**
 * The reducers for the entire search feature state.
 */
export const daffSearchProductConfigurableReducers: ActionReducerMap<DaffConfigurableProductReducersState> = {
  configurableProductAttributes: daffSearchProductConfigurableProductEntitiesReducer,
};
