# @daffodil/auth
Building and maintaining a model and code for an ecommerce store is complex and mentally taxing. `@daffodil/auth`
provides clear interfaces, models, services, and redux state for the frontend of an ecommerce store so that you don't have to.

The auth module manages the login and registration of users and their corresponding access tokens.

## Installation
```
npm install @daffodil/auth
```

## Usage
This package does most of the setup for you. All you need to do is import the `DaffAuthModule` into your app, and either provide your own `DaffLoginDriver` and/or `DaffRegisterDriver` or just use the default one by importing `DaffAuthDriverModule.forRoot()`.

### Register

Dispatch the `DaffAuthRegister` action with `DaffRegisterRequest` to register a new user. This will automatically log the user in.

### Login

Dispatch the `DaffAuthLogin` action with `DaffLoginRequest` to log the user in.

## Extension and Customization
If you feel like what our services return just won't cut it for your business needs, no problem! All of the reducers, effects, selectors, actions, and facades are 100% reusable with a customized model and service.

### Login
If the `DaffLoginResponse` doesn't have all of the necessary fields you require, you'll need to provide three things.
1. A custom service that implements the `DaffLoginService`. This should be injected with the `DaffLoginDriver` injection token to override the default service.
2. A custom service that implements the `DaffAuthTransformerService`. This should be injected with the `DaffAuthTransformer` injection token to override the default transformer.
3. Define a model that extends the `DaffLoginResponse` and/or the `DaffLoginRequest`.
These steps should allow you to make supported requests to login in whatever way you'd like, while still being compatible with the daffodil redux state, because all redux components are generically defined.

### Register
If the `DaffRegisterResponse` doesn't have all of the necessary fields you require, you'll need to provide two things.
1. A custom service that implements the `DaffRegisterService`. This should be injected with the `DaffRegisterDriver` injection token to override the default service.
2. Define a model that extends the `DaffRegisterResponse` and/or the `DaffRegisterRequest`.
These steps should allow you to make supported requests to register in whatever way you'd like, while still being compatible with the daffodil redux state, because all redux components are generically defined.