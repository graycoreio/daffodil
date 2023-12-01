import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffPrefixSuffixModule } from '../../core/prefix-suffix/prefix-suffix.module';
import { DaffSelectOptionDirective } from './option/option.directive';
import { DaffSelectComponent } from './select.component';
import { DaffSelectSelectedOptionDirective } from './selected-option/selected-option.directive';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    OverlayModule,
    PortalModule,
    DaffPrefixSuffixModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DaffSelectComponent,
    DaffSelectOptionDirective,
    DaffSelectSelectedOptionDirective,
  ],
  exports: [
    DaffSelectComponent,
    DaffSelectOptionDirective,
    DaffSelectSelectedOptionDirective,
  ],
})

export class DaffSelectModule {}
