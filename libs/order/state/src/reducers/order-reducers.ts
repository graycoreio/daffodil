import { ActionReducerMap } from '@ngrx/store';

import { daffOrderEntitiesReducer } from './order-entities/public_api';
import { DaffOrderReducersState } from './order-reducers.interface';
import { daffOrderReducer } from './order/order.reducer';

export const daffOrderReducers: ActionReducerMap<DaffOrderReducersState> = {
  order: daffOrderReducer,
  orders: daffOrderEntitiesReducer,
};
