# @daffodil/cart
Building and maintaining a model and code for an ecommerce store is complex and mentally taxing. `@daffodil/cart`
provides clear interfaces, models, and factories for the frontend of an ecommerce store so that you don't have to.

## Installation
To install the cart library and its dependencies, use the following commands in the terminal.

Install with npm:
```
npm install @daffodil/cart @daffodil/core @ngrx/store @ngrx/effects --save
```

Install with yarn:
```
yarn add @daffodil/cart @daffodil/core @ngrx/store @ngrx/effects
```

## Getting started
The cart module includes multiple layers of functionality that build on each other. The models can be used on their own. The driver layers can be used with the models but also allow custom extensions to those models to be passed as generics. A state layer sits on top of the driver layer. Individual drivers can be overridden through driver injection tokens and custom extensions to models can be passed into the state layer's generics.

The recommended way to use Daffodil is with the state layer.

- [State guide](/libs/cart/guides/state.md)
- [Drivers guide](/libs/cart/guides/drivers.md)
- [Extension guide](/libs/cart/guides/extension.md)

## Usage

### Interacting with platforms
Interacting with platforms through the [cart facade](/libs/cart/guides/state.md#using-the-facade) is the recommended method.

It is possible to interact with platforms by directly calling the drivers. While this requires more work to integrate into components, it offers greater flexibility. See the [drivers guide](/libs/cart/guides/drivers.md) for more information.

### Using routing guards
The cart module provides a number of routing guards to prevent access to certain pages until specific data becomes available.

The following example illustrates using the `DaffShippingAddressGuard` to prevent accessing the shipping method page of checkout until a shipping address has been set.

```ts
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

### Providing platform-agnostic payment IDs
The cart facade provides a field (`paymentId$`) for agnostic payment IDs. The IDs must be user-supplied to prevent circular package dependencies. Provide an object for the `DaffCartPaymentMethodIdMap` token. The keys of this object should be cart payment methods and the values should be strings.

```ts
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
