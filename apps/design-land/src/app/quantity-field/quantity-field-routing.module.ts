import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DesignLandQuantityFieldComponent } from './quantity-field.component';

export const quantityFieldRoutes: Routes = [
  {path: '', component: DesignLandQuantityFieldComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(quantityFieldRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class DesignLandQuantityFieldRoutingModule {}
