import { NgModule } from '@angular/core';

import { DaffFormFieldComponent } from './form-field/form-field.component';
import { DaffErrorMessageModule } from '../error-message/error-message.module';
import { DaffFormLabelModule } from '../form-label/form-label.module';

@NgModule({
  imports: [
    DaffFormFieldComponent,
    DaffErrorMessageModule,
    DaffFormLabelModule,
  ],
  exports: [
    DaffFormFieldComponent,
    DaffErrorMessageModule,
    DaffFormLabelModule,
  ],
})
export class DaffFormFieldModule { }
