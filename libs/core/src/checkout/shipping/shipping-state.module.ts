import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { reducers } from './reducers';

@NgModule({
  imports: [
      StoreModule.forFeature('shipping', reducers)
  ]
})
export class CoreShippingStateModule { }
