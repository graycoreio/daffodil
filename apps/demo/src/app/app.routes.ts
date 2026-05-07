import { Routes } from '@angular/router';

import { daffExternalMatcherTypeGuard } from '@daffodil/external-router/routing';
import {
  DaffProductPageIdResolver,
  DaffProductPageUrlResolver,
} from '@daffodil/product/routing';

import { provideDemoImageGalleryState } from './core/image-gallery/image-gallery-state.provider';
import { provideDemoSidebarState } from './core/sidebar/sidebar-state.provider';
import { TemplateComponent } from './core/template/template/template.component';
import { NotFoundComponent } from './misc/not-found/not-found.component';
import { ProductGridViewComponent } from './product/pages/product-grid-view/product-grid-view.component';
import { ProductViewComponent } from './product/pages/product-view/product-view.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/product-grid',
    pathMatch: 'full',
  },
  {
    path: '',
    component: TemplateComponent,
    providers: [
      provideDemoSidebarState(),
    ],
    children: [
      { path: 'product-grid', component: ProductGridViewComponent },
      { path: 'cart', loadChildren: () => import('./cart/cart.routes').then(m => m.demoCartRoutes) },
      {
        path: 'product/:id',
        providers: [
          provideDemoImageGalleryState(),
        ],
        component: ProductViewComponent,
        resolve: {
          product: DaffProductPageIdResolver,
        },
      },
      {
        path: 'category',
        loadChildren: () => import('./category/category.routes').then(r => r.demoCategoryRoutes),
      },
      {
        path: 'checkout',
        loadChildren: () => import('./checkout/checkout.routes').then(r => r.demoCheckoutRoutes),
      },
      { path: '404', component: NotFoundComponent },
      {
        path: '**',
        canMatch: [daffExternalMatcherTypeGuard('PRODUCT')],
        providers: [
          provideDemoImageGalleryState(),
        ],
        component: ProductViewComponent,
        resolve: {
          product: DaffProductPageUrlResolver,
        },
      },
      {
        path: '**',
        canMatch: [daffExternalMatcherTypeGuard('CATEGORY')],
        loadChildren: () => import('./category/category.routes').then(r => r.demoCategoryRoutes),
      },
    ],
  },
];
