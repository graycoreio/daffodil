import { ActionReducerMap } from '@ngrx/store';

import { daffShippingReducer } from './shipping/shipping.reducer';
import { DaffShippingReducersState } from './shipping-reducers.interface';

export const daffShippingReducers: ActionReducerMap<DaffShippingReducersState> = {
  shipping: daffShippingReducer,
};
