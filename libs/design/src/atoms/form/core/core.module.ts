import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffErrorStateMatcher } from './error-state-matcher/error-state-matcher';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DaffErrorStateMatcher
  ],
  declarations: [
    DaffErrorStateMatcher
  ]
})
export class DaffFormCoreModule { }
