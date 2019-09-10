import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/button',
    pathMatch: 'full'
  },
  { path: 'accordion', loadChildren: () => import('./accordion/accordion.module').then(m => m.AccordionModule) }, 
  { path: 'button', loadChildren: () => import('./button/button.module').then(m => m.ButtonModule) },
  { path: 'callout', loadChildren: () => import('./callout/callout.module').then(m => m.CalloutModule) },
  { path: 'card', loadChildren: () => import('./card/card.module').then(m => m.CardModule) },
  { path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) },
  { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
  { path: 'hero', loadChildren: () => import('./hero/hero.module').then(m => m.HeroModule) },
  { path: 'link-set', loadChildren: () => import('./link-set/link-set.module').then(m => m.LinkSetModule) },
  { path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListModule) },
  { path: 'loading-icon', loadChildren: () => import('./loading-icon/loading-icon.module').then(m => m.LoadingIconModule) },
  { path: 'image-gallery', loadChildren: () => import('./image-gallery/image-gallery.module').then(m => m.ImageGalleryModule) },
  { path: 'navbar', loadChildren: () => import('./navbar/navbar.module').then(m => m.NavbarModule) },
  { path: 'modal', loadChildren: () => import('./modal/modal.module').then(m => m.ModalModule) },
  { path: 'paginator', loadChildren: () => import('./paginator/paginator.module').then(m => m.PaginatorModule) },
  { path: 'progress-indicator', loadChildren: () => import('./progress-indicator/progress-indicator.module').then(m => m.ProgressIndicatorModule) },
  { path: 'qty-dropdown', loadChildren: () => import('./qty-dropdown/qty-dropdown.module').then(m => m.QtyDropdownModule) },
  {path: 'sidebar', loadChildren: () => import('./sidebar/sidebar.module').then(m => m.SidebarModule)}
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
export class DesignLandAppRoutingModule { }
