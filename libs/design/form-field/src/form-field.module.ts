import { NgModule } from '@angular/core';

import {
  DaffErrorMessageComponent,
  DaffFormFieldLabelDirective,
  DaffHintComponent,
} from '@daffodil/design/form';

import { DaffFormFieldComponent } from './form-field/form-field.component';

/**
 * @deprecated in favor of standalone components. Deprecated in version 0.84.0. Will be removed in version 1.0.0.
 */
@NgModule({
  imports: [
    DaffFormFieldComponent,
    DaffErrorMessageComponent,
    DaffHintComponent,
    DaffFormFieldLabelDirective,
  ],
  exports: [
    DaffFormFieldComponent,
    DaffErrorMessageComponent,
    DaffHintComponent,
    DaffFormFieldLabelDirective,
  ],
})
export class DaffFormFieldModule { }
