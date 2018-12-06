import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToCartComponent } from './add-to-cart.component';
import { DaffButtonModule } from '@daffodil/design';

@NgModule({
  imports: [
    CommonModule,
    DaffButtonModule
  ],
  declarations: [
    AddToCartComponent
  ],
  exports: [
    AddToCartComponent
  ]
})
export class AddToCartModule { }
