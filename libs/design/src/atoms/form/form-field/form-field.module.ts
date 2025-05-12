import { NgModule } from '@angular/core';

import { DaffFormFieldComponent } from './form-field/form-field.component';
import { DaffErrorMessageModule } from '../error-message/error-message.module';
import { DaffFormLabelModule } from '../form-label/form-label.module';

/**
 * @deprecated in favor of standalone components. Deprecated in version 0.84.0. Will be removed in version 1.0.0.
 */
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
