# State
`@daffodil/cart` provides a fully featured state library to streamline the management of an application's state as well as driver interaction.

## Overview
The facade is an abstraction that provides all the functionality needed for standard use. It's the recommended way to interact with the Daffodil state layer.

## Set up the root component
1. Import the `DaffCartStateModule` in the root component.
2. Import `StoreModule.forRoot({})`. This will be relevant later on when using the redux and state management features of `@daffodil/cart`.

```ts
@ngModule({
  imports:[
    StoreModule.forRoot({}),
    DaffCartStateModule
  ]
})
export class AppModule {}
```

## Using the facade
The `DaffCartStateModule` provides a `DaffCartFacade` that wraps the complexities of the state library into one place. This facade will handle updating the user's cart and can also be used to build UI with behaviors common to a cart.

To inject the facade inside a component, include an instance of `DaffCartFacade` in the component's constructor.

```ts
@Component({})
export class CartComponent {
  constructor(public cartFacade: DaffCartFacade) {}
}
```

Once the `DaffCartFacade` has been set up in the component, it can now be used to manage a user's cart. To perform operations on the cart, pass actions to the `DaffCartFacade#dispatch` method. When carts are created using the `DaffCartCreate` action, Daffodil will save the cart ID in local storage and automatically pass it to the driver layer for future operations. Various cart properties and a list of errors are available on the cart facade as observable streams.

> Note: The storage mechanism can be configured. See the [storage guide](/libs/core/guides/storage.md#environment-specific-storage-services) for more details.

Additionally, the Daffodil cart facade provides three different loading states for each section of the cart:

| State | Description                                                                  |
| ------------ | --------------------------------------------------------------------- |
| `mutating$`  | Tracks when an update to a cart property is occurring                 |
| `resolving$` | Tracks when new data is being fetched but no updates are taking place |
| `loading$`   | Emits `true` when either `mutating$` or `resolving$` is `true`        |

There is also overall `featureLoading$`, `featureMutating$`, and `featureResolving$` streams to track loading for any section of the cart. These can be used to enhance the application's UI.

The following example illustrates a component used to display and manage a cart's items.

```ts
import {
  DaffCartItemAdd,
  DaffCartItemList,
  DaffCartItemInput,
  DaffCartItemInputType,
  DaffCartFacade,
  DaffCartItem
} from '@daffodil/cart';

export class CartItemComponent implements OnInit {
  items$: Observable<DaffCartItem[]>;
  errors$: Observable<string[]>;
  loading$: Observable<boolean>;

  constructor(public cartFacade: DaffCartFacade) {}

  ngOnInit() {
    this.items$ = this.cartFacade.items$;
    this.errors$ = this.cartFacade.itemErrors$;
    this.loading$ = this.cartFacade.itemLoading$;

    // load the cart items
    this.cartFacade.dispatch(new DaffCartItemList())
  }

  addSimpleItem(productId: string, qty: number) {
    const input: DaffCartItemInput = {
      type: DaffCartItemInputType.Simple,
      productId,
      qty
    };
    this.cartFacade.dispatch(new DaffCartItemAdd(input));
  }
}
```

> In this example, three observable streams are assigned from `cartFacade`. Then when `addSimpleItem` is called, the `cartFacade`'s  `dispatch` function is called with the appropriately formed input. The input data is then sent off to the backend and the three observable streams are updated when a response is received.

## Accessing state with selectors
Accessing state with the facade is recommended but for greater flexibility the redux store's state can be directly accessed with Daffodil's selectors.

To properly maintain memoization of selectors that are compatible with generic models, Daffodil selectors are hidden behind an exported getter function. This function returns an object that contains the selectors.

The following example also showcases a component used to display and manage a cart's items but without using the facade.

```ts
import {
  DaffCartItemAdd,
  DaffCartItemList,
  DaffCartItemInput,
  DaffCartItemInputType,
  DaffCartItem,
  getDaffCartSelectors
} from '@daffodil/cart';

export class CartItemComponent implements OnInit {
  items$: Observable<DaffCartItem[]>;
  errors$: Observable<string[]>;
  loading$: Observable<boolean>;

  constructor(public store: Store<any>) {}

  ngOnInit() {
    const {
      selectCartItems,
      selectItemErrors,
      selectItemLoading
    } = getDaffCartSelectors();

    this.items$ = this.store.pipe(select(selectCartItems));
    this.errors$ = this.store.pipe(select(selectItemErrors));
    this.loading$ = this.store.pipe(select(selectItemLoading));

    // load the cart items
    this.store.dispatch(new DaffCartItemList())
  }

  addSimpleItem(productId: string, qty: number) {
    const input: DaffCartItemInput = {
      type: DaffCartItemInputType.Simple,
      productId,
      qty
    };
    this.store.dispatch(new DaffCartItemAdd(input));
  }
}
```

## Cart resolution
This tutorial will walk you through the cart resolution process, which is responsible for resolving a user's cart upon application initialization. This behavior is chiefly managed by the `DaffResolvedCartGuard`.

### Supported scenarios
At the moment, the following scenarios are handled by the `DaffResolvedCartGuard`.

> For customer cart support, use [@daffodil/cart-customer](/libs/cart-customer/README.md).

- Generating a new cart when a user visits the application for the very first time.
- Retrieving a previously existing cart for a user upon page reload.
- Generating a new cart for a user when their prior cart isn't found (e.g., after expiry).
- Skipping cart resolution during server-side rendering.
- Upon a resolution failure, bailing out and navigating somewhere outside the scope of a cart resolution (e.g. your Ecommerce Service's API is down).

### Usage
Assuming that you're already using the `DaffCartStateModule` and have previously selected a [driver](/libs/cart/guides/drivers.md) for `@daffodil/cart`, you can simply add the guard to your route's `canActivate` and the guard will handle the rest.

```ts
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello.component';
import { DaffResolvedCartGuard } from '@daffodil/cart/state';
import { DaffCartInMemoryDriverModule } from '@daffodil/cart/driver/in-memory';
export const appRoutes: [
   {
      path: '',
      component: HelloComponent,
      canActivate: [DaffResolvedCartGuard],
   }
]

@NgModule({
  imports: [
    //DaffCartInMemoryDriverModule.forRoot(),
    DaffCartStateModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
})
export class AppModule {}
```

Upon adding the code, load up the route and take a look at the Network Requests in your browser. You should see at least one request to your ecommerce systems's cart endpoint that attempts resolution.

### Configuration
You can configure the route to which the `DaffResolvedCartGuard` navigates when an error occurs during resolution. See the [configuration guide](/libs/cart/guides/configuration.md) and the `resolution` key of `DaffCartStateConfiguration` for more information.

### Gotchas

#### Guard ordering
The guard's return is observable, and as such, when paired with other guards it won't necessarily complete in the order you expect, be sure to be careful about your guard ordering.

For example, Angular provides no guarantee that either of these guards runs before the other.

```ts
{
  ...,
  canActivate: [DaffResolvedCartGuard, SomeOtherGuard]
}
```

If you need the guarantee, you can nest the guards.

```ts
{
  ...,
  canActivate: [DaffResolvedCartGuard],
  children: [
    {
      ...
      canActivate: [SomeOtherGuard]
    }
  ]
}
```

## Configuration
`@daffodil/cart/state` exposes a `forRoot` method on the `DaffCartStateModule` that allows you to pass in a configuration object to configure the behavior of the package.

You can import it like so:

```ts
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello.component';
import { DaffResolvedCartGuard } from '@daffodil/cart/state';
import { DaffCartInMemoryDriverModule } from '@daffodil/cart/driver/in-memory';
export const appRoutes: [
   {
      path: '',
      component: HelloComponent,
      canActivate: [DaffResolvedCartGuard],
   }
]

@NgModule({
  imports: [
    DaffCartInMemoryDriverModule.forRoot(),
    DaffCartStateModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
})
export class AppModule {}
```

The only argument to `forRoot` is the configuration object. For more information, see `DaffCartStateConfiguration`.

## Dependency injectable reducers
`@daffodil/cart/state` provides mechanisms for consuming applications and libraries to modify state reduction behavior. Injected reducers run after the Daffodil reducers and should take care to not violate the `DaffCartReducersState` interface.

### Purpose
`@daffodil/cart/state` consumers may wish to modify the state for the `daffCart` feature in a way not explicitly provided by `@daffodil/cart/state`. A common example is adding payment info to the cart payment object in response to non-`@daffodil/cart/state` actions.

### Usage
The following example demonstrates modifying the cart's payment info in response to a user-defined action.

```ts
interface MyPaymentInfo {
  ccLast4: string;
}

class MyUpdatePaymentSuccessAction implements Action {
  type = 'My Update Payment Success Action';

  constructor(
    public paymentInfo: MyPaymentInfo,
  ) {}
}

function myPaymentUpdateReducer(state: DaffCartReducersState, action: MyUpdatePaymentSuccessAction): DaffCartReducersState {
  switch (action.type) {
    case 'My Update Payment Success Action':
      return {
        ...state,
        cart: {
          ...state.cart,
          cart: {
            ...state.cart.cart,
            payment: {
              ...state.cart.cart.payment,
              payment_info: {
                ...state.cart.cart.payment.payment_info, // careful not to overwrite existing payment data
                ...action.paymentInfo,
              },
            },
          },
        },
      };
    default:
      return state;
  }
}

@NgModule({
  providers: [
    ...daffCartProvideExtraReducers(
      myPaymentUpdateReducer,
    ),
  ],
})
class MyPaymentModule {}
```

<!-- TODO: add dependency injectable actions for effects guide once we implement it -->
