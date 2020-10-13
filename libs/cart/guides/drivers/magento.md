# Cart Magento Driver

The In-Memory driver is for rapid development without the need to set up a magento/shopify/etc backend. It will mock out the submission of a cart form and operate like a functional backend.

To set up, import the `DaffCartMagentoDriverModule` from the `@daffodil/cart/testing` library and the `ApolloModule` from `angular-in-memory-web-api`.
 Include `DaffCartMagentoDriverModule.forRoot()` and `ApolloModule` in the imports section of your `app.module`.

```typescript
import { ApolloModule } from 'apollo-angular';
import { DaffCartMagentoDriverModule } from '@daffodil/cart/testing';

@NgModule({
  imports: [
    DaffCartMagentoDriverModule.forRoot(),
    ApolloModule
  ]
})
export class AppModule {}
```

Now your `DaffCart` implementation will have access to the In-Memory Driver to use while developing.

> It is important to note to only have one `daffodil/cart` driver set up in your App.Module at a time. To set up a driver configuration to make switching between different backend drivers simple, follow the [advanced setup guide](). <!-- TODO: add multiple drivers guide -->

### Fragment Introspection

You should set up fragment introspection with the Magento backend. Refer to the [fragment introspection guide](../../docs/advanced/fragment-introspection) for more info.

