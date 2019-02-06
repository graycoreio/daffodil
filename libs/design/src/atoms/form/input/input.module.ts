import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffInputComponent } from './input/input.component';
import { DaffInputValidatorComponent } from './input-validator/input-validator.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DaffInputComponent,
    DaffInputValidatorComponent
  ],
  declarations: [
    DaffInputComponent,
    DaffInputValidatorComponent
  ]
})
export class DaffInputModule { }
