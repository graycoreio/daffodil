import { ActionReducerMap } from '@ngrx/store';

import { DaffShippingReducersState } from './shipping-reducers.interface';
import { daffShippingReducer } from './shipping/shipping.reducer';

export const daffShippingReducers: ActionReducerMap<DaffShippingReducersState> = {
  shipping: daffShippingReducer
}
