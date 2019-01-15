import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingOptionsComponent } from './components/shipping-options/shipping-options.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    ShippingOptionsComponent
  ],
  exports: [
    ShippingOptionsComponent
  ]
})
export class ShippingOptionsModule { }
