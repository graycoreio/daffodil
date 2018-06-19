import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreShippingStateModule } from './shipping-state.module';
import { ShippingContainer } from './containers/shipping.component';

@NgModule({
  imports: [
    CommonModule,

    /**
     * Ngrx/store
     */
    CoreShippingStateModule,
  ],
  declarations: [
    ShippingContainer
  ],
  exports: [
    ShippingContainer
  ]
})
export class CoreShippingModule { }
