import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffQuantityFieldModule } from '@daffodil/design';
import { DaffFormFieldModule } from '@daffodil/design/forms/form-field';

import { DisabledQuantityFieldComponent } from './disabled-quantity-field.component';

@NgModule({
  declarations: [
    DisabledQuantityFieldComponent,
  ],
  exports: [
    DisabledQuantityFieldComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DaffFormFieldModule,
    DaffQuantityFieldModule,
  ],
})
export class DisabledQuantityFieldModule {}
