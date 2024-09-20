# Drivers

## In-memory web API
The in-memory driver is for rapid development without the need to set up a magento/shopify/etc backend. It will mock out the submission of a newsletter subscription and operate like a functional database.

To set up in the root component:
1. Import `DaffNewsletterInMemoryDriverModule` from `@daffodil/newsletter/testing`
2. Import `HttpClientInMemoryWebApiModule` from `angular-in-memory-web-api`
3. Include `DaffContactInMemoryDriverModule.forRoot()` and `HttpClientInMemoryWebApiModule` in the imports section.

```ts
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { DaffNewsletterInMemoryDriverModule } from '@daffodil/newsletter/testing';

@NgModule({
  imports: [
    DaffNewsletterInMemoryDriverModule.forRoot(),
    HttpClientInMemoryWebApiModule.forRoot()
  ]
})
export class AppModule {}
```

Now your `@daffodil/newsletter` implementation will have access to the in-memory driver to use while developing.

> Note: It is important to only have one driver set up at a time in the root component. To set up a driver configuration to make switching between different backend drivers simple, follow the [advanced setup guide](). <!-- later on this can link to a guide about setting up a config file for multiple drivers like demo -->

## Hubspot
<!-- need docs>