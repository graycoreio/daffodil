import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { daffShippingReducers } from './reducers/shipping-reducers';

@NgModule({
  imports: [
    StoreModule.forFeature('shipping', daffShippingReducers)
  ]
})
export class DaffShippingStateModule { }
