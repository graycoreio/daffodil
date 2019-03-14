# Installation 
This will walk you through a simple setup of the `@daffodil` packages.

> Please note that as of now, we don't provide any pre-built store application pages. We do provide the `@daffodil/design` component kit, and many examples in `@daffodil/demo`, but, out-of-the-box, you won't see much different than a default Angular installation.

## Prerequisites

1. [Node v8+](https://nodejs.org/en/)
2. [Angular CLI](https://cli.angular.io/)

## Set Up Your Angular Project

```bash
ng new my-store && cd my-store
```

## Install the @daffodil packages

1. Install Daffodil Modules You Need
    * `npm install --save @daffodil/product` - Install Product Module
    * `npm install --save @daffodil/cart` - Install Cart Module
    * `npm install --save @daffodil/checkout` - Install Checkout Module

## Install Peer Dependencies

```bash
npm install --save @daffodil/core @daffodil/driver @ngrx/store @ngrx/effects @ngrx/entity
```

## Configure Your App
Add the following to your new application's root `AppModule`.

> Be sure to replace the default `YOUR_STORE_URL_GOES_HERE` with your store's url in your `AppModule`.

```ts
@NgModule({
    ...
    imports: [
        ...
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        DaffodilModule.forRoot({BASE_URL: "YOUR_STORE_URL_GOES_HERE"}),
        ...
    ],
    ...
})
export class AppModule { }
```

## Serve the App
Serving the app should be very familiar if you've ever worked with Angular. It should be as simple as:

1. `ng serve`
2. Visit http://localhost:4200 in your browser

## Next Steps
[Check out Daffodil's demo store](https://github.com/graycoreio/daffodil/tree/develop/apps/demo) for code examples.