# Configuration

The External Router exposes configuration via a configuration object passed to the `forRoot` of the `DaffExternalRouterModule`.

An array of `DaffTypeRoutePair`s can be passed as the second argument to `forRoot`. They can also be provided through DI using the `daffProvideRouteResolvableByType` function.

## Insertion Strategy

`@daffodil/external-router` inserts routes before the wildcard route by default. More complex insertion behavior can be customized using [`DaffTypeRoutePair#insertionStrategy`](../../../libs/external-router/src/external-router.module.ts).

Note that if the route is inserted into a nested tree then additional work will be needed to ensure that the URL and inserted route's final path match.

`app.module.ts`
```ts
import {daffInsertRouteBeforeWildCardStrategy} from '@daffodil/external-router'

const insertRouteToProductFirstChild = (routeToInsert: Route, routes: Routes) => routes.map(route =>
  route.path === 'product'
      ? {
        ...route,
        children: [
          routeToInsert,
          ...route.children
        ]
      }
      : route
  )

@NgModule({
	imports: [
		DaffExternalRouterModule.forRoot({
			failedResolutionPath: 'not-found',
		}, [
      {
        type: 'product',
        route: {
          component: MyProductPageComponent
        },
        insertionStrategy: (routeToInsert: Route, routes: Routes) =>
          // insert a route to redirect to your nested route
          daffInsertRouteBeforeWildCardStrategy(
            {
              path: routeToInsert.path,
              redirectTo: `product/${routeToInsert.path}`
            },
            insertRouteToProductFirstChild(routeToInsert, routes)
          )
      }
    ]),
	],
})
class AppModule {}
```

`app-routing.module.ts`
```ts
import {DaffExternalRouterExistenceGuard} from '@daffodil/external-router/routing'

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'not-found',
        ...
      },
      {
        path: 'product',
        children: [
          // product routes will be inserted here
          ...
        ]
      },
      ...,
      // all other route types are inserted here by default
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

## Configuration Options

For further information beyond the documentation here, see `DaffExternalRouterConfiguration`.

| Setting              | Purpose                                                       | Default Value |
| -------------------- | ------------------------------------------------------------- | ------------- |
| failedResolutionPath | The path to redirect to when external route resolution fails. | '/'           |
