import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffPrefixSuffixModule } from '../../core/prefix-suffix/prefix-suffix.module';
import { DaffButtonComponent } from './button.component';


@NgModule({
  imports: [
    CommonModule,
    DaffPrefixSuffixModule,
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
