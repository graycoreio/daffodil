import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffSelectOptionDirective } from './option/option.directive';
import { DaffSelectComponent } from './select.component';
import { DaffErrorMessageModule } from '../../atoms/form/error-message/error-message.module';
import { DaffFormLabelModule } from '../../atoms/form/form-label/form-label.module';
import { DaffPrefixSuffixModule } from '../../core/prefix-suffix/prefix-suffix.module';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    OverlayModule,
    PortalModule,
    DaffPrefixSuffixModule,
    DaffFormLabelModule,
    DaffErrorMessageModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DaffSelectComponent,
    DaffSelectOptionDirective,
  ],
  exports: [
    DaffSelectComponent,
    DaffSelectOptionDirective,
    DaffPrefixSuffixModule,
    DaffFormLabelModule,
    DaffErrorMessageModule,
  ],
})

export class DaffSelectModule {}
