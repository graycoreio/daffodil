import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  DaffLoadingIconModule,
  DaffPrefixSuffixModule,
} from '@daffodil/design';

import { DaffButtonComponent } from './button/button.component';

@NgModule({
  imports: [
    CommonModule,
    DaffPrefixSuffixModule,
    DaffLoadingIconModule,
  ],
  declarations: [
    DaffButtonComponent,
  ],
  exports: [
    DaffButtonComponent,
    DaffPrefixSuffixModule,
  ],
})
export class DaffButtonModule { }
