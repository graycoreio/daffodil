import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffPrefixSuffixModule } from '../../core/prefix-suffix/prefix-suffix.module';
import { DaffLoadingIconModule } from '../loading-icon/loading-icon.module';
import { DaffButtonComponent } from './button.component';


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
