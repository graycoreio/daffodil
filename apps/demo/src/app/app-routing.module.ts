import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import {
  DaffExternalRouterModule,
  daffDataPathUrlMatcher,
  daffInsertDataPathStrategy,
} from '@daffodil/external-router';
import { DaffExternalRouterExistenceGuard } from '@daffodil/external-router/routing';
import {
  DaffProductPageIdResolver,
  DaffProductPageUrlResolver,
} from '@daffodil/product/routing';

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
    path: '', component: TemplateComponent, children: [
      { path: 'product-grid', component: ProductGridViewComponent },
      { path: 'cart',       loadChildren: () => import('./cart/cart.module').then(m => m.DemoCartModule) },
      {
        path: 'product/:id',
        component: ProductViewComponent,
        resolve: {
          product: DaffProductPageIdResolver,
        },
      },
      {
        matcher: daffDataPathUrlMatcher,
        data: {
          daffExternalRouteType: 'PRODUCT',
        },
        component: ProductViewComponent,
        resolve: {
          product: DaffProductPageUrlResolver,
        },
      },
      {
        path: 'category',
        loadChildren: () => import('./category/category.module').then(m => m.CategoryModule),
      },
      {
        matcher: daffDataPathUrlMatcher,
        data: {
          daffExternalRouteType: 'CATEGORY',
        },
        loadChildren: () => import('./category/category.module').then(m => m.CategoryModule),
      },
      {
        path: 'checkout',
        loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule),
      },
      { path: '404', component: NotFoundComponent },
    ],
  },
  {
    path: '**',
    canActivate: [DaffExternalRouterExistenceGuard],
    children: [],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled',
    }),
    DaffExternalRouterModule.forRoot({
      failedResolutionPath: '404',
      notFoundResolutionPath: '404',
    }, [
      {
        type: 'CATEGORY',
        insertionStrategy: daffInsertDataPathStrategy,
        route: {},
      },
      {
        type: 'PRODUCT',
        insertionStrategy: daffInsertDataPathStrategy,
        route: {},
      },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {}
