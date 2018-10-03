import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffDropdownComponent } from './dropdown/dropdown.component';
import { DaffDropdownTitleComponent } from './dropdown-title/dropdown-title.component';
import { DaffDropdownBodyComponent } from './dropdown-body/dropdown-body.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DaffDropdownComponent,
    DaffDropdownTitleComponent,
    DaffDropdownBodyComponent
  ],
  exports: [
    DaffDropdownComponent,
    DaffDropdownTitleComponent,
    DaffDropdownBodyComponent
  ]
})
export class DaffDropdownModule { }
