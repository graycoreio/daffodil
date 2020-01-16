# @daffodil/authorizenet
The authorize.net module is for generating a payment nonce through authorize.net's AcceptJS api.

## Installation
```
npm install @daffodil/authorizenet
```

## Usage
This package does all the setup for you. All you need to do is import the `DaffAuthorizeNetModule` into your app, and either provide your own `DaffPaymentDriver` or just use the default one by also importing `DaffAuthorizeNetDriverModule.forRoot()`. 

Call the `DaffAuthorizeNetGenerateToken` action with a `DaffAuthorizeNetTokenRequest` to generate a payment nonce. Access the payment nonce through the `DaffAuthorizeNetFacade`.
