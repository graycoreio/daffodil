import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffFormFieldComponent } from './form-field/form-field.component';
import { DaffErrorMessageComponent } from './error-message/error-message.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,

    FontAwesomeModule
  ],
  exports: [
    DaffFormFieldComponent,
    DaffErrorMessageComponent
  ],
  declarations: [
    DaffFormFieldComponent,
    DaffErrorMessageComponent
  ]
})
export class DaffFormFieldModule { }
