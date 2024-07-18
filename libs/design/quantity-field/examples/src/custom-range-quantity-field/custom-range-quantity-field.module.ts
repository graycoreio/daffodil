import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  DaffQuantityFieldModule,
  DaffFormFieldModule,
} from '@daffodil/design';

import { CustomRangeQuantityFieldComponent } from './custom-range-quantity-field.component';

@NgModule({
  declarations: [
    CustomRangeQuantityFieldComponent,
  ],
  exports: [
    CustomRangeQuantityFieldComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DaffFormFieldModule,
    DaffQuantityFieldModule,
  ],
})
export class CustomRangeQuantityFieldModule {}
