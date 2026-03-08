# Testing driver
The testing driver is a no-op driver intended for use in unit tests. It always returns a successful response with a short delay, without making any real HTTP requests.

> Note: Use `DaffContactTestingDriverModule` for driver-level unit tests (e.g. testing effects). For component-level tests that use the facade, use [`MockDaffContactFacade`](/libs/contact/guides/testing.md) from `@daffodil/contact/state/testing` instead.

To set up in a test module:
1. Import `DaffContactTestingDriverModule` from `@daffodil/contact/driver/testing`.
2. Include `DaffContactTestingDriverModule.forRoot()` in the `imports` of your `TestBed` configuration.

```ts
import { TestBed } from '@angular/core/testing';

import { DaffContactTestingDriverModule } from '@daffodil/contact/driver/testing';

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [
      DaffContactTestingDriverModule.forRoot(),
    ],
  });
});
```
