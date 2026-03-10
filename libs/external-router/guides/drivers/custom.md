# Create a custom driver

To create a custom driver, write a service that implements `DaffExternalRouterDriverInterface` from `@daffodil/external-router/driver` and provide it with `provideDaffExternalRouterDriver`.

## Parsing and processing URLs

The `url` passed to the `resolve` method can and will have extra information such as query parameters, fragments, and leading slashes. Drivers should take care to parse the passed URL into a form that can be resolved by the platform.

Additionally, URLs returned by the driver's `resolve` method should be in a form that satisfies Angular's [`Route#path`](https://angular.dev/api/router/Route) type. Generally, this means that the url should not have leading slashes or other info such as query parameters or fragments.

### Example

```ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DaffExternalRouterDriverInterface } from '@daffodil/external-router/driver';
import { DaffExternallyResolvableUrl } from '@daffodil/external-router';

@Injectable({
  providedIn: 'root',
})
class MyCustomExternalRouterDriver implements DaffExternalRouterDriverInterface {
  resolve(url: string): Observable<DaffExternallyResolvableUrl> {
    return {
      url: "test.html",
      type: "SOME_VALUE";
      code: 200;
      data: null;
    };
  }
}
```

Then provide the driver in your application configuration:

```ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideExternalRouter } from '@daffodil/external-router';
import { provideDaffExternalRouterDriver } from '@daffodil/external-router/driver';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideExternalRouter(),
    provideDaffExternalRouterDriver(MyCustomExternalRouterDriver),
  ],
};
```
