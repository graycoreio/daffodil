# @daffodil/paypal
`@daffodil/paypal` manages the graphQL calls, state, selectors, and models for making a payment token request to PayPal.

## Overview
Requests should be made through the `DaffGeneratePaypalExpressToken` action through the `DaffPaypalFacade`. Selection of the retrieved token and other pertinent fields (including navigation urls for PayPal) can also be done through the `DaffPaypalFacade`.

`@daffodil/paypal` currently supports both a Magento driver and an in-memory driver for local development, but this will not enable an entire workflow of the PayPal process because it requires a configured sandbox url.

## Installation
To install `@daffodil/paypal`, use the following commands in the terminal.

Install with npm:
```bash
npm install @daffodil/paypal --save
```

Install with yarn:

```bash
yarn add @daffodil/paypal
```

## Getting started

### Using in-memory web API
Import the `DaffPaypalInMemoryDriverModule.forRoot()` into your root component.

### Using Magento backend
1. Import the `DaffPaypalMagentoDriverModule.forRoot()` into your root component.
2. Use the `DAFF_PAYPAL_EXPRESS_DRIVER_CONFIG` injection token to set up your PayPal URLs (the URLs that are given to PayPal to direct the customer back to your site)

## Extensions and customizations
If you feel like what our services return just won't cut it for your business needs, no problem! All of the reducers, effects, selectors, actions, and facades are 100% reusable with a customized model and service.

If the `DaffPaypalExpressTokenResponse` doesn't have all of the necessary fields you require, you'll need to provide three things:
1. A custom service that implements the `DaffPaypalExpressServiceInterface`. This should be injected with the `DaffPaypalExpressDriver` injection token to override the default service.
2. A custom service that implements the `DaffPaypalTransformerInterface`. This should be injected with the `DaffPaypalTransformer` injection token to override the default transformer.
3. Define a model that extends the `DaffPaypalExpressTokenResponse` and/or the `DaffPaypalExpressTokenRequest`.

These steps should allow you to make supported requests to PayPal in whatever way you'd like, while still being compatible with the Daffodil redux state, because all redux components are generically defined.
