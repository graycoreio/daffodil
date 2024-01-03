import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffQuantityFieldModule } from '@daffodil/design';
import { DaffFormFieldModule } from '@daffodil/design/forms/form-field';

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
