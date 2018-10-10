import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './cart-item.component';
import { DesignModule } from '../../../design/design.module';

@NgModule({
  imports: [
    CommonModule,
    DesignModule
  ],
  declarations: [
    CartItemComponent
  ],
  exports: [
    CartItemComponent
  ]
})
export class CartItemModule { }
