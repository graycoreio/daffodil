# Using the InMemory Driver

The In-Memory driver is for rapid development without the need to set up a magento/shopify/etc backend. It will mock out the submission of a newsletter subscription and operate like a functional database.

To set up, inside of your `app.module` make sure to include the `DaffNewsletterInMemoryDriverModule.forRoot()` inside of your imports section, as well as to import the `DaffNewsletterInMemoryDriverModule` from the `@daffodil/newsletter/testing` library and the `HttpClientInMemoryWebApiModule` from `angular-in-memory-web-api`.

```typescript
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

Now your `DaffNewsletter` implementation will have access to the In-Memory Driver to use while developing.

> It is important to note to only have one driver set up in your App.Module at a time. To set up a driver configuration to make switching between different backend drivers simple, follow the [advanced setup guide](). <!-- later on this can link to a guide about setting up a config file for multiple drivers like demo -->
