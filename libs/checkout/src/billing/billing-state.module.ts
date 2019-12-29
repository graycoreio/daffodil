import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { daffBillingReducers } from './reducers/billing-reducers';

@NgModule({
  imports: [
    StoreModule.forFeature('billing', daffBillingReducers)
  ]
})
export class DaffBillingStateModule { }
