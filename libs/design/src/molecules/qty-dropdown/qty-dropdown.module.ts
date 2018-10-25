import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QtyDropdownComponent } from './qty-dropdown.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    QtyDropdownComponent
  ],
  exports: [
    QtyDropdownComponent
  ]
})
export class DaffQtyDropdownModule { }
