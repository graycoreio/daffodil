import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffPrefixSuffixModule } from '@daffodil/design';

import { DaffButtonComponent } from './button/button.component';

/** @deprecated in favor of {@link DAFF_BUTTON_COMPONENTS} */
@NgModule({
  imports: [
    CommonModule,
    DaffButtonComponent,
  ],
  exports: [
    DaffButtonComponent,
    DaffPrefixSuffixModule,
  ],
})
export class DaffButtonModule { }
