import { ActionReducerMap } from '@ngrx/store';

import { daffProductReducer } from './product/product.reducer';
import { daffProductEntitiesReducer } from './product-entities/product-entities.reducer';
import { daffProductGridReducer } from './product-grid/product-grid.reducer';
import { DaffProductReducersState } from './product-reducers-state.interface';

/**
 * Returns state values from all product related reducers.
 */
export const daffProductReducers: ActionReducerMap<DaffProductReducersState> = {
  products: daffProductEntitiesReducer,
  productGrid: daffProductGridReducer,
  product: daffProductReducer,
};
