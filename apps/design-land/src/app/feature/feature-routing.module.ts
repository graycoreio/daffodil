import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FeatureComponent } from './feature.component';

export const featureRoutes: Routes = [
  {path: '', component: FeatureComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(featureRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class DesignLandFeatureRoutingModule {}
