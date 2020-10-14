# Magento

The Magento driver communicates with the Magento backend through the GraphQL API.

To set up, import the `DaffCartMagentoDriverModule` from the `@daffodil/cart` library and the `ApolloModule` from `apollo-angular`.
 Include `DaffCartMagentoDriverModule.forRoot()` and `ApolloModule` in the imports section of your `AppModule`.

```typescript
import { ApolloModule } from 'apollo-angular';
import { DaffCartMagentoDriverModule } from '@daffodil/cart';

@NgModule({
  imports: [
    DaffCartMagentoDriverModule.forRoot(),
    ApolloModule
  ]
})
export class AppModule {}
```

Now your `DaffCart` implementation will be able to interact with Magento.

> It is important to note to only have one `@daffodil/cart` driver set up in your `AppModule` at a time. To set up a driver configuration to make switching between different backend drivers simple, follow the [advanced setup guide](). <!-- TODO: add multiple drivers guide -->

### Fragment Introspection

You should set up fragment introspection with the Magento backend. Refer to the [fragment introspection guide](../../../../tools/builders/guides/fragment-introspection.md) for more info.

