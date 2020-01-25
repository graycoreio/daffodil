# @daffodil/paypal

Building and maintaining a model and code for an ecommerce store is complex and mentally taxing. `@daffodil/paypal`
provides clear interfaces, models, factories, services, and redux state for the frontend of an ecommerce store so that you don't have to.

The paypal module manages the graphQL calls, state, selectors, and models for making a payment token request to paypal. Requests should be made through the `DaffGeneratePaypalExpressToken` action through the `DaffPaypalFacade`. Selection of the retrieved token and other pertinent fields (including navigation urls for paypal) can also be done through the `DaffPaypalFacade`.

Right now, the `@daffodil/paypal` package supports an in-memory for developing locally (but this will not enable an entire workflow of the paypal process, because this requires a configured sandbox url) and a magento driver.

## Installation
```
npm install @daffodil/paypal
```

To use the `@daffodil/paypal` with an `in-memory-web-api`, import the `DaffPaypalInMemoryDriverModule.forRoot()` into your app.module. To use `@daffodil/paypal` with a magento backend, import the `DaffPaypalMagentoDriverModule.forRoot()` into your app.module. To set your paypal urls (the urls that are given to paypal to direct the customer back to your site), use the `DaffPaypalConfig` injection token. 

## Extension and customization
If you feel like what our services return just won't cut it for your business needs, no problem! All of the reducers, effects, selectors, actions, and facades are 100% reusable with a customized model and service. If the `DaffPaypalTokenResponse` doesn't have all of the necessary fields you require, you'll need to provide three things.
1. A custom service that implements the `DaffPaypalServiceInterface`. This should be injected with the `DaffPaypalDriver` injection token to override the default service.
2. A custom service that implements the `DaffPaypalTransformerInterface`. This should be injected with the `DaffPaypalTransformer` injection token to override the default transformer.
3. Define a model that extends the `DaffPaypalTokenResponse` and/or the `DaffPaypalTokenRequest`.
These steps should allow you to make supported requests to paypal in whatever way you'd like, while still being compatible with the daffodil redux state, because all redux components are generically defined.
