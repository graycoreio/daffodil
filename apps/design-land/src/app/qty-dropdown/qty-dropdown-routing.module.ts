import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DesignLandQtyDropdownComponent } from './qty-dropdown.component';



export const qtyDropdownRoutes: Routes = [
  { path: '', component: DesignLandQtyDropdownComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(qtyDropdownRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DesignLandQtyDropdownRoutingModule {}
