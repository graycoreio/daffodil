import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffFormFieldComponent } from './form-field/form-field.component';
import { DaffErrorMessageModule } from '../error-message/error-message.module';

@NgModule({
  imports: [
    CommonModule,

    FontAwesomeModule,
    DaffErrorMessageModule,
  ],
  exports: [
    DaffFormFieldComponent,
    DaffErrorMessageModule,
  ],
  declarations: [
    DaffFormFieldComponent,
  ],
})
export class DaffFormFieldModule { }
