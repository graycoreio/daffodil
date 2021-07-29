import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DesignLandNavbarComponent } from './navbar.component';

export const loadingRoutes: Routes = [
  { path: '', component: DesignLandNavbarComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(loadingRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DesignLandNavbarRoutingModule {}
