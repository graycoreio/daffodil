import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffButtonModule } from '@daffodil/design';

import { PlaceOrderComponent } from './place-order.component';


@NgModule({
  imports: [
    CommonModule,
    DaffButtonModule,
  ],
  declarations: [
    PlaceOrderComponent,
  ],
  exports: [
    PlaceOrderComponent,
  ],
})
export class PlaceOrderModule { }
