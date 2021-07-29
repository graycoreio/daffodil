import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DesignLandFeatureComponent } from './feature.component';

export const featureRoutes: Routes = [
  { path: '', component: DesignLandFeatureComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(featureRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DesignLandFeatureRoutingModule {}
