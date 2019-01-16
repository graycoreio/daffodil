import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShippingFormComponent } from './shipping-form.component';
import { AddressFormModule } from '../../forms/address-form/address-form.module';
import { ShippingOptionsModule } from '../shipping-options/shipping-options.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AddressFormModule,
    ShippingOptionsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ShippingFormComponent
  ],
  exports: [
    ShippingFormComponent
  ]
})
export class ShippingFormModule { }
