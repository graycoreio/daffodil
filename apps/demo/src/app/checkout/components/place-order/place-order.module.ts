import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceOrderComponent } from './place-order.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PlaceOrderComponent
  ],
  exports: [
    PlaceOrderComponent
  ]
})
export class PlaceOrderModule { }
