import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffPrefixSuffixModule } from '@daffodil/design';
import { DaffLoadingIconModule } from '@daffodil/design/loading-icon';

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
