# Drivers 

## In-memory web API
The in-memory driver is for rapid development without the need to set up a magento/shopify/etc backend. It will mock out the submission of a contact form and operate like a functional backend.

To set up in the root component:
1. Import `DaffContactInMemoryDriverModule` from `@daffodil/contact/driver/in-memory`
2. Import `HttpClientInMemoryWebApiModule` from `angular-in-memory-web-api`
3. Include `DaffContactInMemoryDriverModule.forRoot()` and `HttpClientInMemoryWebApiModule.forRoot()` in the imports section.

```ts
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DaffContactInMemoryDriverModule } from '@daffodil/contact/driver/in-memory';

@NgModule({
  imports: [
    DaffContactInMemoryDriverModule.forRoot(),
    HttpClientInMemoryWebApiModule.forRoot()
  ]
})
export class AppModule {}
```

Now your `DaffContact` implementation will have access to the In-Memory driver to use while developing.

> Note: It is important to only have one `@daffodil/contact` driver set up at a time in the root component.

## Hubspot forms driver
The Hubspot forms driver allows the contact form to connect directly to your Hubspot account to manage contact form submissions.

To set up in the root component:
1. Import the `DaffContactHubSpotDriverModule` from `@daffodil/contact/driver/hubspot`.
2. Include `DaffContactHubSpotDriverModule.forRoot(config)` in the imports section, where `config` is a `DaffHubspotConfig` object containing information needed to connect to your hubspot form. [Find your Hubspot form's information here](https://knowledge.hubspot.com/forms/find-your-form-guid).

```ts
import { DaffContactHubSpotDriverModule } from '@daffodil/contact/driver/hubspot';
import { DaffHubspotConfig } from '@daffodil/driver/hubspot';

const config: DaffHubspotConfig = { portalId: '123456', guid: 'ff9999' };

@NgModule({
  imports: [
    DaffContactHubSpotDriverModule.forRoot(config)
  ]
})
export class AppModule {}
```

Now your `DaffContact` implementation will connect to your registered Hubspot Form for use in your app!

> Note: It is important to only have one `@daffodil/contact` driver set up at a time in the root component.

## Testing driver
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
