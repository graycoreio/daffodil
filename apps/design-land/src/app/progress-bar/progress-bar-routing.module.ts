import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DesignLandProgressBarComponent } from './progress-bar.component';

export const progressBarRoutes: Routes = [
  { path: '', component: DesignLandProgressBarComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(progressBarRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DesignLandProgressBarRoutingModule {}
