import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DaffQtyDropdownComponent } from './qty-dropdown.component';
import { DaffFormFieldModule } from '../../atoms/form/form-field/form-field.module';
import { DaffNativeSelectModule } from '../../atoms/form/select/select.module';
import { DaffInputModule } from '../../atoms/form/input/input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DaffFormFieldModule,
    DaffNativeSelectModule,
    DaffInputModule
  ],
  declarations: [
    DaffQtyDropdownComponent
  ],
  exports: [
    DaffQtyDropdownComponent
  ]
})
export class DaffQtyDropdownModule { }
