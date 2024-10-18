import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { provideExternalRouter } from '@daffodil/external-router';
import {
  daffExternalMatcherTypeGuard,
  daffExternalRouterTypeMatcher,
} from '@daffodil/external-router/routing';
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
        path: 'category',
        loadChildren: () => import('./category/category.module').then(m => m.CategoryModule),
      },
      {
        matcher: daffExternalRouterTypeMatcher,
        canMatch: [daffExternalMatcherTypeGuard('PRODUCT')],
        component: ProductViewComponent,
        resolve: {
          product: DaffProductPageUrlResolver,
        },
      },
      {
        matcher: daffExternalRouterTypeMatcher,
        canMatch: [daffExternalMatcherTypeGuard('CATEGORY')],
        loadChildren: () => import('./category/category.module').then(m => m.CategoryModule),
      },
      {
        path: 'checkout',
        loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule),
      },
      { path: '404', component: NotFoundComponent },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  providers: [
    provideExternalRouter(),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {}
