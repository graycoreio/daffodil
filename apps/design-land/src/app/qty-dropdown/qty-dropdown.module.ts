import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QtyDropdownComponent } from './qty-dropdown.component';
import { DesignLandQtyDropdownRoutingModule } from './qty-dropdown-routing.module';
import { DaffQtyDropdownModule } from '@daffodil/design';
import { DaffFormFieldModule } from 'libs/design/src';

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
