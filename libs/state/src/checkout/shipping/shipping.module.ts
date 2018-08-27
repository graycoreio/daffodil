import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateShippingStateModule } from './shipping-state.module';
import { ShippingContainer } from './containers/shipping.component';

@NgModule({
  imports: [
    CommonModule,

    /**
     * Ngrx/store
     */
    StateShippingStateModule,
  ],
  declarations: [
    ShippingContainer
  ],
  exports: [
    ShippingContainer
  ]
})
export class StateShippingModule { }
