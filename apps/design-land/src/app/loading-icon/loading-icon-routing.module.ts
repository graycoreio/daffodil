import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DesignLandLoadingIconComponent } from './loading-icon.component';

export const loadingRoutes: Routes = [
  { path: '', component: DesignLandLoadingIconComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(loadingRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DesignLandLoadingIconRoutingModule {}
