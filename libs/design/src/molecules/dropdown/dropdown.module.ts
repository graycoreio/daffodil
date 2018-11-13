import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffDropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DaffDropdownComponent
  ],
  exports: [
    DaffDropdownComponent
  ]
})
export class DaffDropdownModule { }
