import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceOrderComponent } from './place-order.component';

import { DaffButtonModule } from '@daffodil/design';

@NgModule({
  imports: [
    CommonModule,
    DaffButtonModule
  ],
  declarations: [
    PlaceOrderComponent
  ],
  exports: [
    PlaceOrderComponent
  ]
})
export class PlaceOrderModule { }
