# Cart In-Memory Web API Driver

The In-Memory driver is for rapid development without the need to set up a magento/shopify/etc backend. It will mock out the management of a cart and operate like a functional backend. It is intended for development and testing purposes; it is not meant to be used in production.

To set up, import the `DaffCartInMemoryDriverModule` from the `@daffodil/cart/testing` library and the `HttpClientInMemoryWebApiModule` from `angular-in-memory-web-api`.
 Include `DaffCartInMemoryDriverModule.forRoot()` and `HttpClientInMemoryWebApiModule` in the imports section of your `app.module`.

```typescript
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DaffCartInMemoryDriverModule } from '@daffodil/cart/testing';

@NgModule({
  imports: [
    DaffCartInMemoryDriverModule.forRoot(),
    HttpClientInMemoryWebApiModule.forRoot()
  ]
})
export class AppModule {}
```

Now your `DaffCart` implementation will have access to the In-Memory Driver to use while developing.

> It is important to note to only have one `daffodil/cart` driver set up in your `app.module` at a time. To set up a driver configuration to make switching between different backend drivers simple, follow the [advanced setup guide](). <!-- TODO: add multiple drivers guide -->
