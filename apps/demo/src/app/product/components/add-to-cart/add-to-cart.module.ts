import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffButtonModule } from '@daffodil/design';

import { AddToCartComponent } from './add-to-cart.component';

@NgModule({
  imports: [
    CommonModule,
    DaffButtonModule,
  ],
  declarations: [
    AddToCartComponent,
  ],
  exports: [
    AddToCartComponent,
  ],
})
export class AddToCartModule { }
