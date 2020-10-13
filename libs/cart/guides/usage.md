# Usage

## Using the Facade

Once the `DaffCartFacade` has been set up in your component, it can now be used to manage a user's cart. To perform operations on the cart, pass actions to the `DaffCartFacade#dispatch` method. When carts are created using the `DaffCartCreate` action, Daffodil will save the cart ID in local storage and automatically pass it to the driver layer for future operations. Various cart properties and a list of errors are available on the cart facade as observable streams.

> Note that the storage mechanism can be configured. See [the storage guide](../../docs/advanced/storage) for more details.

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

> In this example, three observable streams are assigned from `cartFacade`. Then when `addSimpleItem` is called, the `cartFacade`'s  `dispatch` function is called with the appropriately formed input. The effect layer will pick up the `DaffCartItemAdd` and invoke the injected driver with the item input info and the stored cart ID. The driver layer then sends your data off to the backend and updates the three observable streams when a response is received.

## Using Routing Guards

`@daffodil/cart` provides a number of routing guards to prevent access to certain pages until specific data becomes available.

The following example illustrates using the `DaffShippingAddressGuard` to prevent accessing the shipping method page of checkout until a shipping address has been set.

```typescript
import {
  DaffShippingAddressGuard,
  DaffCartShippingAddressGuardRedirectUrl
} from '@daffodil/cart';

@NgModule({
  imports: [
    ...,
    RouterModule.forRoot([
      {
        path: 'checkout/shipping',
        component: CheckoutShippingComponent,
        canActivate: [DaffShippingAddressGuard]
      },
      {
        path: '',
        component: HomepageComponent,
      },
    ])
  ],
  providers: [
    {
      provide: DaffCartShippingAddressGuardRedirectUrl,
      useValue: '/'
    }
  ]
})
class AppModule {}
```

> The `'checkout/shipping'` route's activation was guarded with the `DaffShippingAddressGuard`, ensuring that page cannot be accessed unless the cart has a valid shipping address set. The `DaffCartShippingAddressGuardRedirectUrl` token is used to configure the path to which the user is redirected when and if the activation fails.

## Providing Platform-Agnostic Payment IDs

The cart facade provides a field (`paymentId$`) for agnostic payment IDs. The IDs must be user-supplied to prevent circular package dependencies. Provide an object for the `DaffCartPaymentMethodIdMap` token. The keys of this object should be cart payment methods and the values should be strings.

```typescript
import {
  DaffCartPaymentMethodIdMap,
  DaffCartFacade,
  DaffCartPaymentMethod
} from '@daffodil/cart';

@NgModule({
  ...,
  providers: [
    {
      provide: DaffCartPaymentMethodIdMap,
      useValue: {
        authorizenet_accept_js: 'authorizenet',
        payflowpro: 'paypal'
      }
    }
  ]
})
class AppModule {}

@Component({})
class CartComponent implements OnInit {
  paymentID$: Observable<string>;

  constructor(private cartFacade: DaffCartFacade) {}

  ngOnInit() {
    this.paymentID$ = this.cartFacade.paymentId$;
  }

  setPayment(info) {
    this.cartFacade.dispatch(new DaffCartPaymentUpdate({
      method: 'authorizenet_accept_js',
      payment_info: info
    }));
  }
}
```

> When `setPayment` is called, the cart payment method will be updated. After this update is finished, the `this.paymentID$` stream will emit `'authorizenet'`.
