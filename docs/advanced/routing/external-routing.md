# External Routing

It is possible to resolve routes dynamically based on platform data. Daffodil enables this behavior with [`@daffodil/external-router`](../../../libs/external-router/README.md).

## Getting Started

### Configuration

`@daffodil/external-router` needs information about how to construct the route. This info can be provided as an argument to [`DaffExternalRouterModule#forRoot`](../../../libs/external-router/src/external-router.module.ts).

#### Insertion Strategy

If routes need to be added at specific points in the router config, the `@daffodil/external-router` configuration exposes [`DaffTypeRoutePair#insertionStrategy`](../../../libs/external-router/src/external-router.module.ts). The insertion strategy can be used to customize the behavior for adding routes.

> See [`@daffodil/external-router` configuration](../../../libs/external-router/guides/configuration.md).

### Route Capture

Guard your wildcard route with [`DaffExternalRouterExistenceGuard`](../../../libs/external-router/routing/src/guard/existence.guard.ts). This will attempt to resolve routes with your platform of choice. If a particular route is resolved by the platform then the guard will invoke the [`DaffExternalRouter`](../../../libs/external-router/src/router/router.service.ts) service and add it to the local route configuration.

For the remainder of the session, subsequent navigations to that path will bypass the wildcard route and be handled directly by the added route.

## Example

The following example demonstrates configuring the external router to accept externally resolved routes of type `product`. Routes resolved to the `product` type will be added to the Angular router config with `MyProductPageComponent` and `DaffProductPageUriResolver`.

The configuration also specifies that in the event an external URL cannot be resolved, the router will be redirected to the `not-found` route.

For example the resolvable route, i.e. a URI the backend platform will recognize and resolve, `product/my-product-name.html` would follow this workflow, given the configurations below:

1. **The User Initializes a Navigation**: A user triggers Angular to route to the `product/my-product-name.html`.
2. **The Route is Processed By Angular Router**: This route is not defined statically in the angular configuration of the app, so it gets caught by the wildcard (`**`) route and gets directed to the `DaffExternalRouterExistenceGuard`.
3. **The `DaffExternalRouterExistenceGuard`**: The "entry point"; where the magic happens.
    1. The `DaffExternalRouterExistenceGuard` verifies with the backend platform (through the `DaffExternalRouterDriver`) that `product/my-product-name.html` is indeed a resolvable route and that this particular route resolves to a product.
    2. Upon successful verification, the `DaffExternalRouterExistenceGuard` dynamically inserts (through the `DaffExternalRouter`) the `product/my-product-name.html` route into the list of Angular routes using the `productRouteConfig` with which `@daffodil/external-router` has been configured.
    3. The Angular router is instructed to reroute to the same route now that `product/my-product-name.html` will be recognized by the Angular Router.
4. **The Route is Processed By Angular Router Again**: The `product/my-product-name.html` route is now directly present in the routing config and will therefore be recognized. Routing will proceed as usual: using the `DaffProductPageUriResolver` to resolve the product data and rendering that data with the `MyProductPageComponent`.

<!-- TODO(griest024): change import path for product routing subpackage -->
`app.module.ts`
```ts
import {DaffExternalRouterModule, DaffTypeRoutePair} from '@daffodil/external-router'
import {DaffProductPageUriResolver} from '@daffodil/product/state'

const productRouteConfig: DaffTypeRoutePair = {
  type: 'product',
  route: {
    component: MyProductPageComponent,
    ..., // additional route config, but without path
    resolve: {
      product: DaffProductPageUriResolver
    }
  }
}

@NgModule({
  imports: [
    DaffExternalRouterModule.forRoot(
      {failedResolutionPath: 'not-found'},
      [productRouteConfig]
    ),
  ],
})
class AppModule {}
```

The following section demonstrates guarding the wildcard route with  `DaffExternalRouterExistenceGuard` in order to capture externally resolved URLs and begin the external router process.

`app-routing.module.ts`
```ts
import {DaffExternalRouterExistenceGuard} from '@daffodil/external-router/routing'

@NgModule({
  imports: [
    RouterModule.forRoot([
      { // navigates here when an external URL fails resolution
        path: 'not-found',
        ...
      },
      ...,
      // routes will be inserted here by default
      {
        path: '**',
        canActivate: [DaffExternalRouterExistenceGuard]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
```

#### Final Router Config

If the app is navigated to `mydomain.com/gameboy` and that URL was externally resolved by the platform, the resulting routing config in the above example would resemble:

```ts
const routesWithAddedRoute = [
  {
    path: 'not-found',
    ...
  },
  ...,
  {
    path: 'gameboy',
    component: MyProductPageComponent,
    resolve: {
      product: DaffProductPageUriResolver
    },
    ..., // additional route config
  }
  // insertion point
  {
    path: '**',
    canActivate: [DaffExternalRouterExistenceGuard]
  }
]
```
