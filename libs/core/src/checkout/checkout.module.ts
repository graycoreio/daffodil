import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreShippingModule } from './shipping/shipping.module';

@NgModule({
  imports: [
    CommonModule,
    CoreShippingModule
  ],
  exports: [
    CoreShippingModule
  ]
})
export class CoreCheckoutModule { }
