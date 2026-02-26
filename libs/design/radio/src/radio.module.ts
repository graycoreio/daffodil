import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  DaffFormFieldLabelDirective,
  DaffHintComponent,
  DaffErrorMessageComponent,
} from '@daffodil/design/form';

import { DaffRadioComponent } from './radio/radio.component';
import { DaffRadioSetComponent } from './radio-set/radio-set.component';

/**
 * @deprecated in favor of standalone components. Deprecated in version 0.90.0. Will be removed in version 1.0.0.
 */
@NgModule({
  imports: [
    CommonModule,
    DaffRadioComponent,
    DaffRadioSetComponent,
    DaffFormFieldLabelDirective,
    DaffHintComponent,
    DaffErrorMessageComponent,
  ],
  exports: [
    DaffRadioComponent,
    DaffRadioSetComponent,
    DaffFormFieldLabelDirective,
    DaffHintComponent,
    DaffErrorMessageComponent,
  ],
})
export class DaffRadioModule { }
