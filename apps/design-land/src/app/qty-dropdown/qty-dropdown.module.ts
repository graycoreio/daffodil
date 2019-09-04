import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QtyDropdownComponent } from './qty-dropdown.component';
import { DesignLandQtyDropdownRoutingModule } from './qty-dropdown-routing.module';

import { DaffQtyDropdownModule } from '@daffodil/design';


@NgModule({
  declarations: [
    QtyDropdownComponent
  ],
  imports: [
    CommonModule,
    DesignLandQtyDropdownRoutingModule,
    DaffQtyDropdownModule
  ]
})
export class QtyDropdownModule { 
  
}
