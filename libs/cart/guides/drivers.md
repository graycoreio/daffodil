# Drivers

- [Drivers](#drivers)
  - [Supported Drivers](#supported-drivers)
    - [In-Memory Web API](#in-memory-web-api)
    - [Magento](#magento)
      - [Fragment Introspection](#fragment-introspection)
  - [Usage](#usage)

Daffodil can interface with supported platforms through drivers. Choose the driver that corresponds to the platform of choice and follow the linked guide to set it up.

## Supported Drivers

### In-Memory Web API

The In-Memory driver is for rapid development without the need to set up a magento/shopify/etc backend. It will mock out the management of a cart and operate like a functional backend. It is intended for development and testing purposes; it is not meant to be used in production.

To set up, import the `DaffCartInMemoryDriverModule` from the `@daffodil/cart/testing` library and the `HttpClientInMemoryWebApiModule` from `angular-in-memory-web-api`.
 Include `DaffCartInMemoryDriverModule.forRoot()` and `HttpClientInMemoryWebApiModule` in the imports section of `AppModule`.

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

Now this `DaffCart` implementation will have access to the In-Memory Driver to use while developing.

> It is important to note to only have one `daffodil/cart` driver set up in `AppModule` at a time. To set up a driver configuration to make switching between different backend drivers simple, follow the [advanced setup guide](). <!-- TODO: add multiple drivers guide -->

### Magento

The Magento driver communicates with the Magento backend through the GraphQL API.

To set up, import the `DaffCartMagentoDriverModule` from the `@daffodil/cart` library and the `ApolloModule` from `apollo-angular`.
 Include `DaffCartMagentoDriverModule.forRoot()` and `ApolloModule` in the imports section of `AppModule`.

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

Now this `DaffCart` implementation will be able to interact with Magento.

> It is important to note to only have one `@daffodil/cart` driver set up in `AppModule` at a time. To set up a driver configuration to make switching between different backend drivers simple, follow the [advanced setup guide](). <!-- TODO: add multiple drivers guide -->

#### Fragment Introspection

You should set up fragment introspection with the Magento backend. Refer to the [fragment introspection guide](../../../../tools/builders/guides/fragment-introspection.md) for more info.

## Usage

The drivers can be injected into components and invoked directly. The following example shows how to list the items in the cart and add a simple item to the cart.

```typescript
import {
  DaffCartItemServiceInterface,
  DaffCartItemDriver,
  DaffCartItemInput,
  DaffCartItemInputType,
  DaffCartItem
} from '@daffodil/cart';

export class CartItemComponent implements OnInit {
  items$: Observable<DaffCartItem[]>;

  constructor(@Inject(DaffCartItemDriver) public cartItemDriver: DaffCartItemServiceInterface) {}

  ngOnInit() {
    // load the cart items
    this.items$ = this.cartItemDriver.list('cartId');
  }

  addSimpleItem(productId: string, qty: number) {
    const input: DaffCartItemInput = {
      type: DaffCartItemInputType.Simple,
      productId,
      qty
    };
    this.items$ = this.cartItemDriver.add('cartId', input).pipe(
      map(cart => cart.items)
    );
  }
}
```
