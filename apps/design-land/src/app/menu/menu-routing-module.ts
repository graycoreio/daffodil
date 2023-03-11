import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DesignLandMenuComponent } from './menu.component';

export const menuRoutes: Routes = [
  { path: '', component: DesignLandMenuComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(menuRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DesignLandMenuRoutingModule {}
