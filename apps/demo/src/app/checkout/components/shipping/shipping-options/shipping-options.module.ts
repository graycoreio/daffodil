import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingOptionsComponent } from './components/shipping-options/shipping-options.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DaffRadioModule } from '@daffodil/design';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DaffRadioModule
  ],
  declarations: [
    ShippingOptionsComponent
  ],
  exports: [
    ShippingOptionsComponent
  ]
})
export class ShippingOptionsModule { }
