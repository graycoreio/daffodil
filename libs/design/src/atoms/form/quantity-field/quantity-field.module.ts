import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DaffNativeSelectModule } from '../select/public_api';
import { DaffInputModule } from '../input/public_api';

import { DaffQuantityFieldComponent } from './quantity-field.component';
import { DaffQuantityInputComponent } from './quantity-input/quantity-input.component';
import { DaffQuantitySelectComponent } from './quantity-select/quantity-select.component';

@NgModule({
  declarations: [
    DaffQuantityFieldComponent, 
    DaffQuantityInputComponent,
    DaffQuantitySelectComponent
  ],
  imports: [
    CommonModule,
    DaffNativeSelectModule,
    DaffInputModule,
    FormsModule
  ],
  exports: [
    DaffQuantityFieldComponent
  ]
})
export class DaffQuantityFieldModule { }
