# `@daffodil/external-router` Drivers

The External Router package provides an interface along with a few pre-fabricated drivers for you to simply drop into your app and get started with external route resolution.

## Available Drivers

- [Testing](./drivers/testing.md)

## Custom Drivers

If you would like to provide your own driver, simply write a service that meets the `DaffExternalRouterDriverInterface` of `@daffodil/external-router/driver` and provide it.

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
