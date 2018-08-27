import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateShippingModule } from './shipping/shipping.module';

@NgModule({
  imports: [
    CommonModule,
    StateShippingModule
  ],
  exports: [
    StateShippingModule
  ]
})
export class StateCheckoutModule { }
