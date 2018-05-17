import { NgModule } from '@angular/core';
import { QtyDropdownComponent } from './qty-dropdown/qty-dropdown.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule    
  ],
  declarations: [
    QtyDropdownComponent
  ],
  exports: [
    QtyDropdownComponent    
  ]
})
export class MoleculesModule { }
