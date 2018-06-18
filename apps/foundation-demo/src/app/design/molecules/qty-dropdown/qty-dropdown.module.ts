import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QtyDropdownComponent } from './qty-dropdown.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    QtyDropdownComponent
  ],
  exports: [
    QtyDropdownComponent
  ]
})
export class QtyDropdownModule { }
