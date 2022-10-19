import { ActionReducerMap } from '@ngrx/store';

import { daffCompositeProductEntitiesReducer } from './composite-product-entities/composite-product-entities.reducer';
import { DaffCompositeProductReducersState } from './composite-product-reducers-state.interface';

/**
 * Returns state values from all composite product related reducers.
 */
export const daffCompositeProductReducers: ActionReducerMap<DaffCompositeProductReducersState> = {
  compositeProductOptions: daffCompositeProductEntitiesReducer,
};
