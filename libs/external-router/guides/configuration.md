# `@daffodil/external-router` Configuration

The External Router exposes configuration via a configuration object passed to the `forRoot` of the `DaffExternalRouterModule`.

An array of `DaffTypeRoutePair`s can be passed as the second argument to `forRoot`. They can also be provided through DI using the `daffProvideRouteResolvableByType` function.

```ts
@NgModule({
	imports: [
		DaffExternalRouterModule.forRoot({
			failedResolutionPath: 'your-custom-error-path',
		}, [
      {
        type: 'some-type',
        route: { redirectTo: '/' },
        insertionStrategy: (route: Route, routes: Routes) => [
          ...routes,
          route
        ]
      }
    ]),
	],
})
class AppModule {}
```

## Configuration Options

For further information beyond the documentation here, see `DaffExternalRouterConfiguration`.

| Setting              | Purpose                                                       | Default Value |
| -------------------- | ------------------------------------------------------------- | ------------- |
| failedResolutionPath | The path to redirect to when external route resolution fails. | '/'           |
