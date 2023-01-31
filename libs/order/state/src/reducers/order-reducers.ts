import { ActionReducerMap } from '@ngrx/store';

import { daffOrdersCollectionReducer } from './order-collection/public_api';
import { daffOrderEntitiesReducer } from './order-entities/public_api';
import { DaffOrderReducersState } from './order-reducers.interface';
import { daffOrderReducer } from './order/order.reducer';

export const daffOrderReducers: ActionReducerMap<DaffOrderReducersState> = {
  order: daffOrderReducer,
  orders: daffOrderEntitiesReducer,
  collection: daffOrdersCollectionReducer,
};
