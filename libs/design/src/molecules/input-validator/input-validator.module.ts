import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputValidatorComponent } from './input-validator.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    InputValidatorComponent
  ],
  exports: [
    InputValidatorComponent
  ]
})
export class DaffInputValidatorModule { }
