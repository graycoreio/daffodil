# Drivers

- [Drivers](#drivers)
  - [Supported Drivers](#supported-drivers)
    - [In-Memory Web API](#in-memory-web-api)
    - [Magento](#magento)
  - [Usage](#usage)

Daffodil can interface with supported platforms through drivers. Choose the driver that correspondes to your platform of choice and follow the linked guide to set it up.

## Supported Drivers

### In-Memory Web API

Optional, but [great for fast prototyping and development](./drivers/in-memory).

### Magento

Refer to [the Magento guide](./drivers/magento)

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