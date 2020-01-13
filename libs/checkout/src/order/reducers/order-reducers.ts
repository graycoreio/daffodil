import { ActionReducerMap } from '@ngrx/store';

import { daffOrderReducer } from './order/order.reducer';
import { DaffOrderReducersState } from './order-reducers.interface';

export const daffOrderReducers: ActionReducerMap<DaffOrderReducersState> = {
  order: daffOrderReducer
}
