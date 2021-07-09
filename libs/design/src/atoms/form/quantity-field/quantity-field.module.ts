import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { DaffInputModule } from '../input/public_api';
import { DaffNativeSelectModule } from '../select/public_api';
import { DaffQuantityFieldComponent } from './quantity-field.component';
import { DaffQuantityInputComponent } from './quantity-input/quantity-input.component';
import { DaffQuantitySelectComponent } from './quantity-select/quantity-select.component';

@NgModule({
  declarations: [
    DaffQuantityFieldComponent,
    DaffQuantityInputComponent,
    DaffQuantitySelectComponent,
  ],
  imports: [
    CommonModule,
    DaffNativeSelectModule,
    DaffInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    DaffQuantityFieldComponent,
  ],
})
export class DaffQuantityFieldModule { }
