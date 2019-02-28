import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffNativeSelectComponent } from './select/select.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DaffNativeSelectComponent
  ],

  declarations: [
    DaffNativeSelectComponent
  ]
})
export class DaffNativeSelectModule { }
