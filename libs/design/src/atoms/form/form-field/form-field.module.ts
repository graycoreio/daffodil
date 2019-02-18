import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffFormFieldComponent } from './form-field/form-field.component';
import { DaffErrorMessageComponent } from './error-message/error-message.component';

@NgModule({
  imports: [
    CommonModule
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
