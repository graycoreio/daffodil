# State

- [State](#state)
  - [Setting up your `AppModule`](#setting-up-your-appmodule)
  - [Using the Facade](#using-the-facade)
  - [Accessing State with Selectors](#accessing-state-with-selectors)

`@daffodil/cart` provides a fully featured state library to streamline the management of your application's state as well as driver interaction.

The facade is an abstraction that provides all the functionality needed for standard use. It is the recommended way to interact with the Daffodil state layer.

## Setting up your `AppModule`

To get started, import the `DaffCartModule` in your `AppModule`. Next, import `StoreModule.forRoot({})`, which will be relevant later on when using the redux and state management features of the cart module.

```typescript
@ngModule({
  imports:[
    StoreModule.forRoot({}),
    DaffCartModule
  ]
})
export class AppModule {}
```

## Using the Facade

The `DaffCartModule` provides a `DaffCartFacade` that wraps the complexities of the state library into one place. This facade will handle updating the user's cart and can also be used to build your UI with behaviors common to a cart.

To inject the facade inside your component, include an instance of `DaffCartFacade` in your component's constructor.

```typescript
@Component({})
export class CartComponent {
  constructor(public cartFacade: DaffCartFacade) {}
}
```

Once the `DaffCartFacade` has been set up in your component, it can now be used to manage a user's cart. To perform operations on the cart, pass actions to the `DaffCartFacade#dispatch` method. When carts are created using the `DaffCartCreate` action, Daffodil will save the cart ID in local storage and automatically pass it to the driver layer for future operations. Various cart properties and a list of errors are available on the cart facade as observable streams.

> Note that the storage mechanism can be configured. See [the storage guide](../../core/guides/advanced/storage.md#environment-specific-storage-services) for more details.

Additionally, the Daffodil cart facade provides three different loading states for each section of the cart. `mutating$` tracks when an update to a cart property is occurring. `resolving$` tracks when new data is being fetched but no updates are taking place. `loading$` emits `true` when either `mutating$` or `resolving$` is `true`. There is also overall `featureLoading$`, `featureMutating$`, and `featureResolving$` streams to track loading for any section of the cart. These can be used to enhance your application's UI.

The following example illustrates a component used to display and manage a cart's items.

```typescript
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

## Accessing State with Selectors

Accessing state with the facade is recommended but for greater flexibility the redux store's state can be directly accessed with Daffodil's selectors.

To properly maintain memoization of selectors, Daffodil selectors are hidden behind an exported getter function. This function returns an object that contains the selectors.

The following example also showcases a component used to display and manage a cart's items but without using the facade.

```typescript
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

<!-- TODO: add dependency injectable reducers guide once we implement it -->
<!-- TODO: add dependency injectable actions for effects guide once we implement it -->
