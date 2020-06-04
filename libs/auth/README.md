# @daffodil/auth
Building and maintaining a model and code for an ecommerce store is complex and mentally taxing. `@daffodil/auth`
provides clear interfaces, models, services, and redux state for the frontend of an ecommerce store so that you don't have to.

The auth module manages the login and registration of customers and their corresponding access tokens.

## Installation

```
npm install @daffodil/auth \
    @angular/common @angular/core @daffodil/core @ngrx/store rxjs \
    --save
```

## Setup

### In-Memory

`@daffodil/auth` provides an in-memory API driver for development and debugging purposes. Simply import the in-memory driver module:

```ts
import {
  DaffAuthModule,
  DaffAuthInMemoryDriverModule
} from '@daffodil/auth/testing';

@NgModule({
  imports: [
    DaffAuthModule
    DaffAuthInMemoryDriverModule.forRoot()
  ]
})
class AppModule {}
```

### Magento

`@daffodil/auth` provides an Magento GraphQL API driver that is production ready. Import the Magento driver module into one of your app modules to use the Magento drivers.

The Magento GraphQL API requires that access tokens are sent in the request headers. The Magento GraphQL drivers use `Apollo` to make requests. During your configuration of `Apollo` set the `Authroization` header to the access token. For example:

```ts
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';

import {
  DaffAuthModule,
  DaffAuthMagentoDriverModule,
  DaffAuthStorageService
} from '@daffodil/auth';

export function provideApollo(httpLink: HttpLink, authStorage: DaffAuthStorageService) {
  const apolloLinks = [httpLink.create({
    uri: 'https://mystore.com/graphql'
  })];

  // Get the authentication token from local storage if it exists
  const token = authStorage.getAuthToken();
  if (token) {
    apolloLinks.unshift(setContext((operation, context) => ({
      headers: {
        Authorization: `Bearer ${token}`
      },
    })));
  }

  const link = ApolloLink.from(apolloLinks);
  const cache = new InMemoryCache();

  return {
    link,
    cache
  }
}

@NgModule({
  imports: [
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    DaffAuthModule,
    DaffAuthMagentoDriverModule.forRoot(),
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: provideApollo,
      deps: [HttpLink, DaffAuthStorageService]
    }
  ]
})
class GraphQLModule {}
```

## Usage

### Registration

The registration of a customer can be initiated with the `DaffAuthRegister` action like so:

```ts
import {
  DaffAccountRegistration,
  DaffAuthRegister
} from '@daffodil/auth';

const registration: DaffAccountRegistration = {
  customer: {
    email: 'john.wick@continental.com',
    firstName: 'John',
    lastName: 'Wick'
  },
  password: 'BabaYaga'
};

store.dispatch(new DaffAuthRegister(registration));
```

The `DaffAccountRegistration` model can be extending to suit your needs while retaining type safety by using generics:

```ts
import {
  DaffAccountRegistration,
  DaffAuthRegister
} from '@daffodil/auth';

interface Registration extends DaffAccountRegistration {
  isBusinessAccount: boolean;
}

const registration: Registration = {
  customer: {
    email: 'john.wick@continental.com',
    firstName: 'John',
    lastName: 'Wick'
  },
  password: 'BabaYaga',
  isBusinessAccount: true
};

store.dispatch(new DaffAuthRegister<Registration>(registration));
```

### Login

A customer login can be initiated with the `DaffAuthLogin` action:

```ts
import {
  DaffLoginInfo,
  DaffAuthLogin
} from '@daffodil/auth';

const loginInfo: DaffLoginInfo = {
  email: 'john.wick@continental.com',
  password: 'BabaYaga'
};

store.dispatch(new DaffAuthLogin(loginInfo));
```

The `DaffLoginInfo` model can be extending to suit your needs while retaining type safety by using generics:

```ts
import {
  DaffLoginInfo,
  DaffAuthLogin
} from '@daffodil/auth';

interface LoginInfo extends DaffLoginInfo {
  stayLoggedIn: boolean;
}

const loginInfo: LoginInfo = {
  email: 'john.wick@continental.com',
  password: 'BabaYaga',
  stayLoggedIn: true
};

store.dispatch(new DaffAuthLogin<LoginInfo>(loginInfo));
```
