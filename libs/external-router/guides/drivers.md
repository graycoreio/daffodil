# `@daffodil/external-router` Drivers

The External Router package provides an interface along with a few pre-fabricated drivers for you to simply drop into your app and get started with external route resolution.

## Available Drivers

- [Testing](./drivers/testing.md)

## Custom Drivers

If you would like to provide your own driver, simply write a service that meets the `DaffExternalRouterDriverInterface` of `@daffodil/external-router/driver` and provide it.

### Parsing and Processing URL
The `url` passed to the `resolve` method can and will have extra info such as query parameters, fragments, and leading slashes. Drivers should take care to parse the passed URL into a form that can be resolved by the platform.

Additionally, URLs returned by the driver's `resolve` method should be in a form that satisfies Angular's `Route#path` type. That is, they should not have leading slashes or other info such as query parameters or fragments.

### Example
```ts
@Injectable({
	providedIn: 'root',
})
class MyCustomExternalRouterService
	implements DaffExternalRouterDriverInterface {
	resolve(url: string): Observable<DaffExternallyResolvableUrl> {
		//Your Logic would go here
		return;
	}
}

@NgModule({
	providers: [
		{
			provide: DaffExternalRouterDriver,
			useExisting: MyCustomExternalRouterService,
		},
	],
})
class AppModule {}
```
