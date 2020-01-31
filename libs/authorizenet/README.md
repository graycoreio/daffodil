# @daffodil/authorizenet
Building and maintaining a model and code for an ecommerce store is complex and mentally taxing. `@daffodil/authorizenet`
provides clear interfaces, models, services, and redux state for the frontend of an ecommerce store so that you don't have to.

The authorizenet module manages the acceptJs calls, state, selectors, and models for making a payment token request to authorize.net.

## Installation
```
npm install @daffodil/authorizenet
```

## Usage
This package does most of the setup for you. All you need to do is import the `DaffAuthorizeNetModule` into your app, and either provide your own `DaffAuthorizeNetDriver` or just use the default one by importing `DaffAuthorizeNetDriverModule.forRoot()`. To set your authorizenet authentication details, provide a `DaffAuthorizeNetConfig` through the `DaffAuthorizeNetConfigToken` injection token. 

Call the `DaffAuthorizeNetGenerateToken` action with a `DaffAuthorizeNetTokenRequest` to generate a payment nonce. Access the payment nonce through the `DaffAuthorizeNetFacade`.

## Extension and customization
If you feel like what our services return just won't cut it for your business needs, no problem! All of the reducers, effects, selectors, actions, and facades are 100% reusable with a customized model and service. If the `DaffAuthorizeNetTokenResponse` doesn't have all of the necessary fields you require, you'll need to provide three things.
1. A custom service that implements the `DaffAuthorizeNetTransformerService`. This should be injected with the `DaffAuthorizeNetTransformer` injection token to override the default transformer.
2. Define a model that extends the `DaffAuthorizeNetTokenResponse` and/or the `DaffAuthorizeNetTokenRequest`.
These steps should allow you to make supported requests to authorizenet in whatever way you'd like, while still being compatible with the daffodil redux state, because all redux components are generically defined.