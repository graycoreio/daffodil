import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DesignLandProgressIndicatorComponent } from './progress-indicator.component';

export const progressIndicatorRoutes: Routes = [
  { path: '', component: DesignLandProgressIndicatorComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(progressIndicatorRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DesignLandProgressIndicatorRoutingModule {}
