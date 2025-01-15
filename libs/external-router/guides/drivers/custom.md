# Customize your own driver
If you would like to customize your own driver, simply write a service that meets the `DaffExternalRouterDriverInterface` from `@daffodil/external-router/driver` and provide it.

## Parsing and Processing URL
The `url` passed to the `resolve` method can and will have extra info such as query parameters, fragments, and leading slashes. Drivers should take care to parse the passed URL into a form that can be resolved by the platform.

Additionally, URLs returned by the driver's `resolve` method should be in a form that satisfies Angular's [`Route#path`](https://angular.dev/api/router/Route) type. Generally, this means that the url should not have leading slashes or other info such as query parameters or fragments.

### Example
```ts
@Injectable({
 providedIn: 'root',
})
class MyCustomExternalRouterService implements DaffExternalRouterDriverInterface {
  resolve(url: string): Observable<DaffExternallyResolvableUrl> {
    // Your logic would go here
    return {
      /**
      * The URL that will be used for the path of the route inserted into the Angular routing config. Should not contain URL fragments, query parameters, or leading slashes.
      */
      url: "test.html",

      /**
      * The type of the route
      */
      type: "SOME_VALUE";

      /**
      * The HTTP status code for the resolvable route.
      */
      code: 200;

      /**
      * Additional route data. Note that this is not mandatory or guaranteed. It's only available when the driver makes it available.
      */
      data: null;
    };
  }
}

@NgModule({
  providers: [
    provideDaffExternalRouterDriver(MyCustomExternalRouterService),
  ],
})
class AppModule {}
```
