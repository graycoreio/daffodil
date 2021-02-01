import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ShippingContainer } from './containers/shipping.component';
import { DaffShippingStateModule } from './shipping-state.module';

@NgModule({
  imports: [
    CommonModule,

    /**
     * Ngrx/store
     */
    DaffShippingStateModule,
  ],
  declarations: [
    ShippingContainer,
  ],
  exports: [
    ShippingContainer,
  ],
})
export class DaffShippingModule { }
