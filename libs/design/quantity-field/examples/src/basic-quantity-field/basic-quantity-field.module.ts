import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  DaffQuantityFieldModule,
  DaffFormFieldModule,
} from '@daffodil/design';

import { BasicQuantityFieldComponent } from './basic-quantity-field.component';

@NgModule({
  declarations: [
    BasicQuantityFieldComponent,
  ],
  exports: [
    BasicQuantityFieldComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DaffFormFieldModule,
    DaffQuantityFieldModule,
  ],
})
export class BasicQuantityFieldModule {}
