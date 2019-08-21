import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/button',
    pathMatch: 'full'
  },
  {path: 'accordion', loadChildren: './accordion/accordion.module#AccordionModule'},
  {path: 'button', loadChildren: './button/button.module#ButtonModule'},
  {path: 'callout', loadChildren: './callout/callout.module#CalloutModule'},
  {path: 'card', loadChildren: './card/card.module#CardModule'},
  {path: 'feature', loadChildren: './feature/feature.module#FeatureModule'},
  {path: 'hero', loadChildren: './hero/hero.module#HeroModule'},
  {path: 'link', loadChildren: './link/link.module#LinkModule'},
  {path: 'list', loadChildren: './list/list.module#ListModule'},
  {path: 'loading-icon', loadChildren: './loading-icon/loading-icon.module#LoadingIconModule'},
  {path: 'form', loadChildren: './form/form.module#FormModule'},
  {path: 'image-gallery', loadChildren: './image-gallery/image-gallery.module#ImageGalleryModule'},
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
