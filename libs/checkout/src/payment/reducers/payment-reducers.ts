import { ActionReducerMap } from '@ngrx/store';

import { daffPaymentReducer } from './payment/payment.reducer';
import { DaffPaymentReducersState } from './payment-reducers.interface';

export const daffPaymentReducers: ActionReducerMap<DaffPaymentReducersState> = {
  payment: daffPaymentReducer,
};
