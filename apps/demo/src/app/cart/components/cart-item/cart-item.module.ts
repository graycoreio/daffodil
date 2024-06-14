import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  DaffFormFieldModule,
  DaffQuantityFieldModule,
} from '@daffodil/design';

import { CartItemComponent } from './cart-item.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DaffFormFieldModule,
    DaffQuantityFieldModule,
  ],
  declarations: [
    CartItemComponent,
  ],
  exports: [
    CartItemComponent,
  ],
})
export class CartItemModule { }
