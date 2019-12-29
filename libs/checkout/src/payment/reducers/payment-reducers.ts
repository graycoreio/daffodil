import { ActionReducerMap } from '@ngrx/store';

import { DaffPaymentReducersState } from './payment-reducers.interface';
import { daffPaymentReducer } from './payment/payment.reducer';

export const daffPaymentReducers : ActionReducerMap<DaffPaymentReducersState> = {
  payment: daffPaymentReducer
}
