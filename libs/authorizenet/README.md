# @daffodil/authorizenet
The authorizenet module manages the acceptJs calls, state, selectors, and models for making a payment token request to authorize.net.

## Installation
```
npm install @daffodil/authorizenet
```

## Usage
This package does most of the setup for you. All you need to do is import the `DaffAuthorizeNetStateModule` into your app, and either provide your own `DaffAuthorizeNetDriver` or just use the default one by importing `DaffAuthorizeNetDriverModule.forRoot()`.

To set your authorizenet authentication details:

1. Provide a `DaffAuthorizeNetConfig` through the `DaffAuthorizeNetConfigToken` injection token.
2. Call the `DaffAuthorizeNetGenerateToken` action with a `DaffAuthorizeNetTokenRequest` to generate a payment nonce.
3. Access the payment nonce through the `DaffAuthorizeNetFacade`.

## Extension and customization
If you feel like what our services return just won't cut it for your business needs, no problem! All of the reducers, effects, selectors, actions, and facades are 100% reusable with a customized model and service. If this module doesn't provide all of the fields you require on the payment info that is passed to the cart, you can inject a custom service through the DaffAuthorizeNetDriver token and extend the `DaffAuthorizeNetTokenRequest` model with a custom model.
