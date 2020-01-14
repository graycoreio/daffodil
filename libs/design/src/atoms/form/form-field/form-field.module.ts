import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffFormFieldComponent } from './form-field.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffPrefixSuffixModule } from '../../../core/prefix-suffix/prefix-suffix.module';
import { DaffFormLabelModule } from '../form-label/form-label.module';
import { DaffErrorMessageModule } from '../error-message/error-message.module';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    DaffPrefixSuffixModule,
    DaffFormLabelModule,
    DaffErrorMessageModule
  ],
  exports: [
    DaffFormFieldComponent,
    DaffPrefixSuffixModule,
    DaffFormLabelModule,
    DaffErrorMessageModule
  ],
  declarations: [
    DaffFormFieldComponent
  ]
})

export class DaffFormFieldModule {}
