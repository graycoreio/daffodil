import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateShippingModule } from './shipping/shipping.module';
import { StateBillingModule } from 'libs/state/src/checkout/billing/billing.module';

@NgModule({
  imports: [
    CommonModule,
    StateShippingModule,
    StateBillingModule,
  ],
  exports: [
    StateShippingModule,
    StateBillingModule
  ]
})
export class StateCheckoutModule { }
