import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QtyDropdownComponent } from './qty-dropdown.component';
import { DesignLandQtyDropdownRoutingModule } from './qty-dropdown-routing.module';
import { DaffQtyFieldModule, DaffFormFieldModule } from '@daffodil/design';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [QtyDropdownComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DaffFormFieldModule,
    DaffQtyFieldModule,
    DesignLandQtyDropdownRoutingModule
  ]
})
export class QtyDropdownModule { }
