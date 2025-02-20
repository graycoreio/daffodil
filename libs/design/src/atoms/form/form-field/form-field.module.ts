import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffFormFieldComponent } from './form-field/form-field.component';
import { DaffErrorMessageModule } from '../error-message/error-message.module';
import { DaffFormLabelModule } from '../form-label/form-label.module';

@NgModule({
  imports: [
    CommonModule,

    DaffErrorMessageModule,
    DaffFormLabelModule,
  ],
  exports: [
    DaffFormFieldComponent,
    DaffErrorMessageModule,
    DaffFormLabelModule,
  ],
  declarations: [
    DaffFormFieldComponent,
  ],
})
export class DaffFormFieldModule { }
