# Drivers
`@daffodil/external-router` provides an interface along with a few pre-fabricated drivers for you to simply drop into your app and get started with external route resolution.

## Supported drivers

### Testing driver
When working with external services, you often want to run tests without depending on the external system's relability or performance. As you write tests for features that depend upon the `@daffodil/external-router/driver` you will find yourself looking for a simple way to meet the `DaffExternalRouterDriverInterface` interface requirements without over-complicating your tests. In these scenarios, having a testing driver that emulates the behavior of an external service is extremely useful. The `DaffExternalRouterTestingDriver` is well-suited for these purposes.

The `DaffExternalRouterTestingDriver` is useful for unit tests, integration tests, and simple acceptance tests where you don't want to depend on an external service over HTTP.

The driver is intended to be:
1. Small
2. Fast
3. Simple
4. Exhibit similar behaviors to how a real external routing service would behave

#### Using the testing driver in a spec
You can see a sample usage of the testing driver in the `DaffExternalRouterExistenceGuard` [spec](https://github.com/graycoreio/daffodil/tree/develop/libs/external-router/routing/src/guard).

### In-memory driver
Working with a fully featured backend can be cumbersome for rapid frontend development. To simplify this, `@daffodil/external-router/driver/in-memory` allows you to simulate a real backend without the associated burden.

`@daffodil/external-router/driver/in-memory` is thin, deferring most of resolving burden to the app. The app should provide a configuration to `DaffExternalRouterDriverInMemoryModule#forRoot` containing logic for resolving a URL. Daffodil recommends relying on the existing in-memory backends for querying URLs for the entities that the app may attempt to externally resolve.

## Custom drivers
If you would like to provide your own driver, simply write a service that meets the `DaffExternalRouterDriverInterface` of `@daffodil/external-router/driver` and provide it.

### Parsing and processing URL
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
		provideDaffExternalRouterDriver(MyCustomExternalRouterService),
	],
})
class AppModule {}
```
