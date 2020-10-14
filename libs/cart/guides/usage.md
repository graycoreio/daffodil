# Usage

## Interacting with Platforms

Interacting with platforms through the Daffodil facade is the recommended method. See [using the facade](./state.md#using-the-facade).

It is possible to interact with platforms by directly calling the drivers. While this requires more work to integrate into components, it offers greater flexibility. See [the drivers guide](./drivers.md) for more information.

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
