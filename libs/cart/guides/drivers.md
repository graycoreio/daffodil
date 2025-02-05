# Drivers
`@daffodil/cart` can interface with supported platforms through drivers. Choose the driver that corresponds to the platform of choice and follow the linked guide to set it up.

## In-memory web API
The in-memory driver is for rapid development without the need to set up a platform-specific backend. It will mock out the management of a cart and operate like a functional backend. It is intended for development and testing purposes and not meant to be used in production.

To set up in the root component:
1. Import the `DaffCartInMemoryDriverModule` from `@daffodil/cart/testing`
2. Import `HttpClientInMemoryWebApiModule` from `angular-in-memory-web-api`
3. Include `DaffCartInMemoryDriverModule.forRoot()` and `HttpClientInMemoryWebApiModule` in the imports section

```ts
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

Now this `DaffCart` implementation will have access to the in-memory driver to use while developing.

> Note: It is important to only have one `daffodil/cart` driver set up at a time in the root component. To set up a driver configuration to make switching between different backend drivers simple, follow the [advanced setup guide](). <!-- TODO: add multiple drivers guide -->

## Magento
The Magento driver communicates with the Magento backend through the GraphQL API.

To set up in the root component:
1. Import the `DaffCartMagentoDriverModule` from `@daffodil/cart`
2. Import `ApolloModule` from `apollo-angular`
3. Include `DaffCartMagentoDriverModule.forRoot()` and `ApolloModule` in the imports section

```ts
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

This `DaffCart` implementation will now be able to interact with Magento.

> Note: It is important to only have one `@daffodil/cart` driver set up in the root component at a time. To set up a driver configuration to make switching between different backend drivers simple, follow the [advanced setup guide](). <!-- TODO: add multiple drivers guide -->

### Fragment introspection
You should set up fragment introspection with the Magento backend. Refer to the [fragment introspection guide](/tools/builders/guides/fragment-introspection.md) for more information.

## Usage
The drivers can be injected into components and invoked directly. The following example shows how to list the items in the cart and add a simple item to the cart.

```ts
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
