import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffSelectValidatorComponent } from './select-validator/select-validator.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DaffSelectValidatorComponent
  ],

  declarations: [
    DaffSelectValidatorComponent
  ]
})
export class DaffSelectModule { }
