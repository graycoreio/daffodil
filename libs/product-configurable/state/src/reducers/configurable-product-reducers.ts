import { ActionReducerMap } from '@ngrx/store';

import { daffConfigurableProductEntitiesReducer } from './configurable-product-entities/configurable-product-entities.reducer';
import { DaffConfigurableProductReducersState } from './configurable-product-reducers-state.interface';

/**
 * Returns state values from all configurable product related reducers.
 */
export const daffConfigurableProductReducers: ActionReducerMap<DaffConfigurableProductReducersState> = {
  configurableProductAttributes: daffConfigurableProductEntitiesReducer,
};
