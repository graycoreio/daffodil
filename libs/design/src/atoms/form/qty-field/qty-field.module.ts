import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DaffNativeSelectModule } from '../select/public_api';
import { DaffInputModule } from '../input/public_api';

import { DaffQtyFieldComponent } from './qty-field.component';
import { DaffQtyTextComponent } from './qty-text/qty-text.component';
import { DaffQtySelectComponent } from './qty-select/qty-select.component';

@NgModule({
  declarations: [
    DaffQtyFieldComponent, 
    DaffQtyTextComponent,
    DaffQtySelectComponent
  ],
  imports: [
    CommonModule,
    DaffNativeSelectModule,
    DaffInputModule,
    FormsModule
  ],
  exports: [
    DaffQtyFieldComponent
  ]
})
export class DaffQtyFieldModule { }
