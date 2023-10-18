import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffButtonComponent } from './button.component';
import { DaffPrefixSuffixModule } from '../../core/prefix-suffix/prefix-suffix.module';
import { DaffLoadingIconModule } from '../loading-icon/loading-icon.module';


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
