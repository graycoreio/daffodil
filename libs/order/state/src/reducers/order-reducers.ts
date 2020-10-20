import { ActionReducerMap } from '@ngrx/store';

import { daffOrderReducer } from './order/order.reducer';
import { DaffOrderReducersState } from './order-reducers.interface';
import { daffOrderEntitiesReducer } from './order-entities/public_api';

export const daffOrderReducers: ActionReducerMap<DaffOrderReducersState> = {
  order: daffOrderReducer,
  orders: daffOrderEntitiesReducer
}
