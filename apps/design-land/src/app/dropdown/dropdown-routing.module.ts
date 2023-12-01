import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DesignLandDropdownComponent } from './dropdown.component';

export const dropdownRoutes: Routes = [
  { path: '', component: DesignLandDropdownComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(dropdownRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DesignLandDropdownRoutingModule {}
