import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectValidatorComponent } from './select-validator.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SelectValidatorComponent
  ],
  exports: [
    SelectValidatorComponent
  ]
})
export class DaffSelectValidatorModule { }
