import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { QtyDropdownComponent } from './qty-dropdown.component';



export const qtyDropdownRoutes: Routes = [
  {path: '', component: QtyDropdownComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(qtyDropdownRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class DesignLandQtyDropdownRoutingModule {}
