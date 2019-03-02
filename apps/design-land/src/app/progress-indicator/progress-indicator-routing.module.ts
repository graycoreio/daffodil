import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProgressIndicatorComponent } from './progress-indicator.component';

export const progressIndicatorRoutes: Routes = [
  {path: '', component: ProgressIndicatorComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(progressIndicatorRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class DesignLandProgressIndicatorRoutingModule {}
