import { ActionReducerMap } from '@ngrx/store';

import { daffBillingReducer } from './billing/billing.reducer';
import { DaffBillingReducersState } from './billing-reducers.interface';

export const daffBillingReducers: ActionReducerMap<DaffBillingReducersState> = {
  billing: daffBillingReducer
}