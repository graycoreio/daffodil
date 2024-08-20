# @daffodil/authorizenet
`@daffodil/authorizenet` manages the acceptJs calls, state, selectors, and models for making a payment token request to Authorize.net.

## Installation
To install `@daffodil/authorizenet` and its required dependencies, use the following commands in the terminal.

Install with npm:
```
npm install @daffodil/authorizenet @daffodil/core @daffodil/cart @angular/common @angular/core @ngrx/effects @ngrx/entity @ngrx/store rxjs --save
```

Install with yarn:
```
yarn add @daffodil/authorizenet @daffodil/core @daffodil/cart @angular/common @angular/core @ngrx/effects @ngrx/entity @ngrx/store rxjs
```

## Getting started
`@daffodil/authorizenet` does most of the setup for you. All you need to do is:

1. Import the `DaffAuthorizeNetStateModule` into the root component of your application.
2. Provide your own `DaffAuthorizeNetDriver` or use the default one by importing `DaffAuthorizeNetDriverModule.forRoot()`.

## Usage
To configure your Authorize.net authentication details:

1. Provide a `DaffAuthorizeNetConfig` through the `DaffAuthorizeNetConfigToken` injection token.
2. Call the `DaffAuthorizeNetGenerateToken` action with a `DaffAuthorizeNetTokenRequest` to generate a payment nonce.
3. Access the payment nonce through the `DaffAuthorizeNetFacade`.

## Extensions and customizations
If you feel like what our services return just won't cut it for your business needs, no problem! All of the reducers, effects, selectors, actions, and facades are 100% reusable with a customized model and service. If `@daffodil/authorizenet` doesn't provide all of the fields you require on the payment info that is passed to the cart, you can inject a custom service through the `DaffAuthorizeNetDriver` token and extend the `DaffAuthorizeNetTokenRequest` model with a custom model.
