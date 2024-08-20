# Configuration
You can configure the way that `@daffodil/external-router` works by providing configurations to the `DaffExternalRouterModule`. 

## Usage
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

### Configuration options

| Property             | Purpose                                                       | Default Value |
| -------------------- | ------------------------------------------------------------- | ------------- |
| failedResolutionPath | The path to redirect to when external route resolution fails. | '/'           |

For more information, see `DaffExternalRouterConfiguration`.
