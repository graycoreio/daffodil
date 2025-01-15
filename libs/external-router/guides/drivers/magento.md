# Magento
This guide provides instructions on how to use various Magento drivers with `@daffodil/external-router`.

## Installation
Like all Magento drivers, you will need to install [Apollo GraphQl](https://the-guild.dev/graphql/apollo-angular/docs).

```bash
npm install --save @daffodil/driver apollo-angular
```

## Getting started
To use the Magento drivers, you need to import and configure the appropriate modules and services in your Angular application.

Magento's GraphQl API has changed with its various versions, with the most recent versions of Magento supporting the `routes` GraphQl query.

As such, most recent versions of Magento should use the driver version which first introduced support for this: `DaffExternalRouterDriverMagentoModule` from `@daffodil/external-router/driver/magento/2.4.3`.

| Magento Version | Module                                  | Package                                          | SEO Data Support |
| --------------- | --------------------------------------- | ------------------------------------------------ | ---------------- |
| v2.4.1          | `DaffExternalRouterDriverMagentoModule` | `@daffodil/external-router/driver/magento/2.4.1` | No               |
| v2.4.2          | `DaffExternalRouterDriverMagentoModule` | `@daffodil/external-router/driver/magento/2.4.2` | No               |
| v2.4.3+         | `DaffExternalRouterDriverMagentoModule` | `@daffodil/external-router/driver/magento/2.4.3` | Yes              |

## Usage
To use the Magento driver for external router:

```ts
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideDaffExternalRouterMagentoDriver } from '@daffodil/external-router/driver/magento/2.4.3';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideExternalRouter(),
    provideDaffExternalRouterMagentoDriver(),
  ],
};
```
