import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/loading-icon',
    pathMatch: 'full'
  },
  {path: 'button', loadChildren: './button/button.module#ButtonModule'},
  {path: 'loading-icon', loadChildren: './loading-icon/loading-icon.module#LoadingIconModule'},
  {path: 'card', loadChildren: './card/card.module#CardModule'},
  {path: 'feature', loadChildren: './feature/feature.module#FeatureModule'},
  {path: 'list', loadChildren: './list/list.module#ListModule'},
  {path: 'form', loadChildren: './form/form.module#FormModule'},
  {path: 'qty-dropdown', loadChildren: './qty-dropdown/qty-dropdown.module#QtyDropdownModule'},
  {path: 'progress-indicator', loadChildren: './progress-indicator/progress-indicator.module#ProgressIndicatorModule'},
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
