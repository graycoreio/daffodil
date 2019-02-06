import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/loading-icon',
    pathMatch: 'full'
  },
  {path: 'loading-icon', loadChildren: './loading-icon/loading-icon.module#LoadingIconModule'},
  {path: 'feature', loadChildren: './feature/feature.module#FeatureModule'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [
    RouterModule
  ]
})
export class DesignLandAppRoutingModule {}
