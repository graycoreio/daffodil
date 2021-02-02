import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ShippingOptionsComponent } from './components/shipping-options/shipping-options.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ShippingOptionsComponent,
  ],
  exports: [
    ShippingOptionsComponent,
  ],
})
export class ShippingOptionsModule { }
