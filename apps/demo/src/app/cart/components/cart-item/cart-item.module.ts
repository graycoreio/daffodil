import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffFormFieldModule } from '@daffodil/design/form-field';
import { DaffSfQuantityFieldComponent } from '@daffodil/storefront/quantity-field';

import { CartItemComponent } from './cart-item.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DaffFormFieldModule,
    DaffSfQuantityFieldComponent,
  ],
  declarations: [
    CartItemComponent,
  ],
  exports: [
    CartItemComponent,
  ],
})
export class CartItemModule { }
