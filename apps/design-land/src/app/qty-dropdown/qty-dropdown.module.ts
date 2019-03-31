import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QtyDropdownComponent } from './qty-dropdown.component';
import { DesignLandQtyDropdownRoutingModule } from './qty-dropdown-routing.module';
import { DaffQtyDropdownModule, DaffFormFieldModule } from '@daffodil/design';

@NgModule({
  declarations: [QtyDropdownComponent],
  imports: [
    CommonModule,
    DaffFormFieldModule,
    DaffQtyDropdownModule,
    DesignLandQtyDropdownRoutingModule
  ]
})
export class QtyDropdownModule { }
