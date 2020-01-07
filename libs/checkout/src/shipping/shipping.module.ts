import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffShippingStateModule } from './shipping-state.module';
import { ShippingContainer } from './containers/shipping.component';

@NgModule({
  imports: [
    CommonModule,

    /**
     * Ngrx/store
     */
    DaffShippingStateModule,
  ],
  declarations: [
    ShippingContainer
  ],
  exports: [
    ShippingContainer
  ]
})
export class DaffShippingModule { }
