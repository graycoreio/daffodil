import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DaffFormFieldModule } from '../../atoms/form/form-field/form-field.module';
import { DaffInputModule } from '../../atoms/form/input/input.module';
import { DaffNativeSelectModule } from '../../atoms/form/native-select/public_api';
import { DaffQtyDropdownComponent } from './qty-dropdown.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DaffFormFieldModule,
    DaffNativeSelectModule,
    DaffInputModule,
  ],
  declarations: [
    DaffQtyDropdownComponent,
  ],
  exports: [
    DaffQtyDropdownComponent,
  ],
})
export class DaffQtyDropdownModule { }
