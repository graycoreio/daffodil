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

import { EmptyCartResolver } from './cart/routing-resolvers/resolvers/empty-cart-resolver.service';
import { CheckoutViewComponent } from './checkout/pages/checkout-view/checkout-view.component';
import { TemplateComponent } from './core/template/template/template.component';
import { NotFoundComponent } from './misc/not-found/not-found.component';
import { ProductGridViewComponent } from './product/pages/product-grid-view/product-grid-view.component';
import { ProductViewComponent } from './product/pages/product-view/product-view.component';
import { ThankYouViewComponent } from './thank-you/pages/thank-you-view.component';

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
      // {
      //   type: 'CATEGORY',
      //   route: {},
      // },
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
