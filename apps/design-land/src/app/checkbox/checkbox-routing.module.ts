import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DesignLandCheckboxComponent } from './checkbox.component';

export const checkboxRoutes: Routes = [
  { path: '', component: DesignLandCheckboxComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(checkboxRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DesignLandCheckboxRoutingModule {}
