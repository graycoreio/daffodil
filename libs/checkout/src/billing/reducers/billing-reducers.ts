import { ActionReducerMap } from '@ngrx/store';

import { DaffBillingReducersState } from './billing-reducers.interface';
import { daffBillingReducer } from './billing/billing.reducer';

export const daffBillingReducers: ActionReducerMap<DaffBillingReducersState> = {
  billing: daffBillingReducer,
};
