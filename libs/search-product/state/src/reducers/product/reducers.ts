import { ActionReducerMap } from '@ngrx/store';

import { daffIdentityReducer } from '@daffodil/core/state';
import { DaffProductReducersState } from '@daffodil/product/state';

import { daffSearchProductEntitiesReducer } from './entities.reducer';

export const daffSearchProductProductReducers: ActionReducerMap<DaffProductReducersState> = {
  products: daffSearchProductEntitiesReducer,
  product: daffIdentityReducer,
  productGrid: daffIdentityReducer,
  bestSellers: daffIdentityReducer,
};
