import { NgModule } from '@angular/core';

import { DaffFormLabelModule } from '@daffodil/design';

import { DaffErrorMessageComponent } from './error-message/error-message.component';
import { DaffFormFieldComponent } from './form-field/form-field.component';
import { DaffHintComponent } from './hint/hint.component';

/**
 * @deprecated in favor of standalone components. Deprecated in version 0.84.0. Will be removed in version 1.0.0.
 */
@NgModule({
  imports: [
    DaffFormFieldComponent,
    DaffErrorMessageComponent,
    DaffHintComponent,
    DaffFormLabelModule,
  ],
  exports: [
    DaffFormFieldComponent,
    DaffErrorMessageComponent,
    DaffHintComponent,
    DaffFormLabelModule,
  ],
})
export class DaffFormFieldModule { }
