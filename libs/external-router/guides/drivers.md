# Drivers

The External Router package provides an interface along with a few pre-fabricated drivers for you to simply drop into your app and get started with external route resolution.

## Available Drivers

### `@daffodil/external-router/driver/testing`

When working with external services, you often want to run tests without depending on the external system's relability or performance. As you write tests for features that depend upon the `@daffodil/external-router/driver` you will find yourself looking for a simple way to meet the `DaffExternalRouterDriverInterface` interface requirements without over-complicating your tests. In these scenarios, having a testing driver that emulates the behavior of an external service is extremely useful. The `DaffExternalRouterTestingDriver` is well-suited for these purposes.

The `DaffExternalRouterTestingDriver` of the `@daffodil/external-router/driver/testing` is useful for Unit Tests, Integration Tests, and simple Acceptance Tests where you don't want to depend on an external service over HTTP. The driver is intended to be:

1. Small
2. Fast
3. Simple
4. Exhibits similar behaviors to how a real external routing service would behave.

#### Using the testing driver in a spec

You can see a sample usage of the testing driver in the `DaffExternalRouterExistenceGuard` [spec](https://github.com/graycoreio/daffodil/tree/develop/libs/external-router/routing/src/guard/existence.guard.spec.ts).

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
