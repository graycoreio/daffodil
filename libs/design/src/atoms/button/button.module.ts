import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffButtonComponent } from './button.component';
import { DaffPrefixSuffixModule } from '../../core/prefix-suffix/prefix-suffix.module';


@NgModule({
  imports: [
    CommonModule,
    DaffPrefixSuffixModule
  ],
  declarations: [
    DaffButtonComponent
  ],
  exports: [
    DaffButtonComponent,
    DaffPrefixSuffixModule
  ]
})
export class DaffButtonModule { }
