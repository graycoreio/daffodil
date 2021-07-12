import {
  Routes,
  RouterModule,
} from '@angular/router';
import { NgModule } from '@angular/core';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/button',
    pathMatch: 'full',
  },
  { path: 'accordion', loadChildren: () => import('./accordion/accordion.module').then(m => m.AccordionModule) },
  { path: 'article', loadChildren: () => import('./article/article.module').then(m => m.DesignLandArticleModule) },
  { path: 'button', loadChildren: () => import('./button/button.module').then(m => m.ButtonModule) },
  { path: 'callout', loadChildren: () => import('./callout/callout.module').then(m => m.DesignLandCalloutModule) },
  { path: 'card', loadChildren: () => import('./card/card.module').then(m => m.CardModule) },
  { path: 'color', loadChildren: () => import('./foundations/color/color.module').then(m => m.DesignLandColorModule) },
  { path: 'container', loadChildren: () => import('./container/container.module').then(m => m.DesignLandContainerModule) },
  { path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) },
  { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
  { path: 'hero', loadChildren: () => import('./hero/hero.module').then(m => m.DesignLandHeroModule) },
  { path: 'link-set', loadChildren: () => import('./link-set/link-set.module').then(m => m.LinkSetModule) },
  { path: 'list', loadChildren: () => import('./list/list.module').then(m => m.DesignLandListModule) },
  { path: 'loading-icon', loadChildren: () => import('./loading-icon/loading-icon.module').then(m => m.LoadingIconModule) },
  { path: 'image', loadChildren: () => import('./image/image.module').then(m => m.DesignLandImageModule) },
  { path: 'image-gallery', loadChildren: () => import('./image-gallery/image-gallery.module').then(m => m.ImageGalleryModule) },
  { path: 'navbar', loadChildren: () => import('./navbar/navbar.module').then(m => m.NavbarModule) },
  { path: 'media-gallery', loadChildren: () => import('./media-gallery/media-gallery.module').then(m => m.DesignLandMediaGalleryModule) },
  { path: 'modal', loadChildren: () => import('./modal/modal.module').then(m => m.ModalModule) },
  { path: 'paginator', loadChildren: () => import('./paginator/paginator.module').then(m => m.PaginatorModule) },
  { path: 'progress-indicator', loadChildren: () => import('./progress-indicator/progress-indicator.module').then(m => m.ProgressIndicatorModule) },
  { path: 'qty-dropdown', loadChildren: () => import('./qty-dropdown/qty-dropdown.module').then(m => m.QtyDropdownModule) },
  { path: 'quantity-field', loadChildren: () => import('./quantity-field/quantity-field.module').then(m => m.DesignLandQuantityFieldModule) },
  { path: 'sidebar', loadChildren: () => import('./sidebar/sidebar.module').then(m => m.SidebarModule) },
  { path: 'checkbox', loadChildren: () => import('./checkbox/checkbox.module').then(m => m.CheckboxModule) },
  { path: 'radio', loadChildren: () => import('./radio/radio.module').then(m => m.RadioModule) },
  { path: 'typography', loadChildren: () => import('./typography/typography.module').then(m => m.DesignLandTypographyModule) }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [
    RouterModule,
  ],
})
export class DesignLandAppRoutingModule { }
