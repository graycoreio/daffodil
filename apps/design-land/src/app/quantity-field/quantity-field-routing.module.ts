import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DesignLandQuantityFieldComponent } from './quantity-field.component';

export const quantityFieldRoutes: Routes = [
  { path: '', component: DesignLandQuantityFieldComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(quantityFieldRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DesignLandQuantityFieldRoutingModule {}
