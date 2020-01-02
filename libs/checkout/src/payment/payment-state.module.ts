import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { daffPaymentReducers } from './reducers/payment-reducers';

@NgModule({
  imports: [
    StoreModule.forFeature('payment', daffPaymentReducers)
  ]
})
export class DaffPaymentStateModule { }
