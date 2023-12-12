import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  DaffErrorMessageModule,
  DaffFormLabelModule,
  DaffPrefixSuffixModule,
} from '@daffodil/design';

import { DaffSelectOptionDirective } from './option/option.directive';
import { DaffSelectComponent } from './select/select.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    OverlayModule,
    PortalModule,
    ReactiveFormsModule,

    DaffPrefixSuffixModule,
    DaffFormLabelModule,
    DaffErrorMessageModule,
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
