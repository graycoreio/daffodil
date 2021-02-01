import { ActionReducerMap } from '@ngrx/store';

import { DaffOrderReducersState } from './order-reducers.interface';
import { daffOrderReducer } from './order/order.reducer';

/**
 * @deprecated
 */
export const daffOrderReducers: ActionReducerMap<DaffOrderReducersState> = {
  order: daffOrderReducer,
};
