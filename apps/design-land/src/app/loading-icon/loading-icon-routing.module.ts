import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoadingIconComponent } from './loading-icon.component';

export const loadingRoutes: Routes = [
  {path: '', component: LoadingIconComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(loadingRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class DesignLandLoadingIconRoutingModule {}
