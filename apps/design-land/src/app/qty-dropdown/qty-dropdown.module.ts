import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffQtyDropdownModule } from '@daffodil/design';

import { DesignLandQtyDropdownRoutingModule } from './qty-dropdown-routing.module';
import { DesignLandQtyDropdownComponent } from './qty-dropdown.component';



@NgModule({
  declarations: [
    DesignLandQtyDropdownComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

    DesignLandQtyDropdownRoutingModule,
    DaffQtyDropdownModule,
  ],
})
export class DesignLandQtyDropdownModule {

}
