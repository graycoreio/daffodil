import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffQuantityFieldModule } from '@daffodil/design';
import { DaffFormFieldModule } from '@daffodil/design/forms/form-field';

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
