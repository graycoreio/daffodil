import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DaffQtyDropdownComponent } from './qty-dropdown.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    DaffQtyDropdownComponent
  ],
  exports: [
    DaffQtyDropdownComponent
  ]
})
export class DaffQtyDropdownModule { }
