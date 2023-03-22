import { ActionReducerMap } from '@ngrx/store';

import { daffIdentityReducer } from '@daffodil/core/state';
import { DaffProductReducersState } from '@daffodil/product/state';

import { daffCategoryProductReducer } from './product.reducer';

export const daffCategoryProductReducers: ActionReducerMap<DaffProductReducersState> = {
  product: daffCategoryProductReducer,
  productGrid: daffIdentityReducer,
  products: daffIdentityReducer,
  bestSellers: daffIdentityReducer,
};
