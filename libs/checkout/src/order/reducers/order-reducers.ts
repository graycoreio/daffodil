import { ActionReducerMap } from '@ngrx/store';

import { daffOrderReducer } from './order/order.reducer';
import { DaffOrderReducersState } from './order-reducers.interface';

/**
 * @deprecated
 */
export const daffOrderReducers: ActionReducerMap<DaffOrderReducersState> = {
  order: daffOrderReducer
}
