import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffPrefixSuffixModule } from '../../core/prefix-suffix/prefix-suffix.module';
import { DaffDropdownOptionDirective } from './dropdown-option/dropdown-option.directive';
import { DaffDropdownComponent } from './dropdown.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    DaffPrefixSuffixModule,
  ],
  declarations: [
    DaffDropdownComponent,
    DaffDropdownOptionDirective,
  ],
  exports: [
    DaffDropdownComponent,
    DaffDropdownOptionDirective,
  ],
})

export class DaffDropdownModule {}
