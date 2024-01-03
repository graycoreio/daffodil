import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffQuantityFieldModule } from '@daffodil/design';
import { DaffFormFieldModule } from '@daffodil/design/forms/form-field';

import { SelectMaxQuantityFieldComponent } from './select-max-quantity-field.component';

@NgModule({
  declarations: [
    SelectMaxQuantityFieldComponent,
  ],
  exports: [
    SelectMaxQuantityFieldComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DaffFormFieldModule,
    DaffQuantityFieldModule,
  ],
})
export class SelectMaxQuantityFieldModule {}
