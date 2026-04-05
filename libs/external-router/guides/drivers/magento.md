# Magento

This guide provides instructions on how to use various Magento drivers with `@daffodil/external-router`.

## Installation

```bash
npm install @daffodil/external-router --save
```

## Getting started

To use the Magento drivers, you need to import and configure the appropriate providers and services in your Angular application.

Magento's GraphQl API has changed with its various versions, with the most recent versions of Magento supporting the `routes` GraphQl query.

As such, most recent versions of Magento should use the driver version which first introduced support for this: `DaffExternalRouterDriverMagentoModule` from `@daffodil/external-router/driver/magento/2.4.3`.

| Magento Version | Provider                                   | Package                                          | SEO Data Support |
| --------------- | ------------------------------------------ | ------------------------------------------------ | ---------------- |
| v2.4.1          | `provideDaffExternalRouterMagentoDriver`   | `@daffodil/external-router/driver/magento/2.4.1` | No               |
| v2.4.2          | `provideDaffExternalRouterMagentoDriver`   | `@daffodil/external-router/driver/magento/2.4.2` | No               |
| v2.4.3+         | `provideDaffExternalRouterMagentoDriver`   | `@daffodil/external-router/driver/magento/2.4.3` | Yes              |

## Selecting a driver version

Each version is a separate package entry point. Only the version you import ends up in your production bundle — unused versions are never included.

The recommended pattern is to create a single `magento-version.ts` file in your app that re-exports from the correct version entry point. All other app files import from this stub, so the version is declared in exactly one place.

```ts
// src/app/drivers/magento-version.ts
// To use a different Magento API version, change the import paths below.
// Supported versions: 2.4.1, 2.4.2, 2.4.3
export { provideDaffExternalRouterMagentoDriver } from '@daffodil/external-router/driver/magento/2.4.3';
export { DaffExternalRouterMagentoDriver } from '@daffodil/external-router/driver/magento/2.4.3';
```

Your providers file then imports from the stub:

```ts
// src/app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { provideExternalRouter } from '@daffodil/external-router';
import { provideDaffExternalRouterMagentoDriver } from './drivers/magento-version';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideExternalRouter(),
    provideDaffExternalRouterMagentoDriver(),
  ],
};
```

## Upgrading Magento version

When you upgrade your Magento store to a new version, update the two import paths in `magento-version.ts`:

```diff
- export { provideDaffExternalRouterMagentoDriver } from '@daffodil/external-router/driver/magento/2.4.2';
- export { DaffExternalRouterMagentoDriver } from '@daffodil/external-router/driver/magento/2.4.2';
+ export { provideDaffExternalRouterMagentoDriver } from '@daffodil/external-router/driver/magento/2.4.3';
+ export { DaffExternalRouterMagentoDriver } from '@daffodil/external-router/driver/magento/2.4.3';
```

No other app code needs to change. Only the new version's bundle will be included in your build.

## Upgrading daffodil without upgrading Magento

No changes are needed. Your `magento-version.ts` stub already points to your Magento version's entry point, which continues to work across daffodil upgrades. Old version entry points remain available until they are removed in a future major daffodil release (with a deprecation notice ahead of time).

## Migrating from NgModule

If your app uses the deprecated `DaffExternalRouterDriverMagentoModule`, migrate to the provider function:

**Before:**

```ts
@NgModule({
  imports: [
    DaffExternalRouterDriverMagentoModule.forRoot()
  ]
})
export class AppModule {}
```

**After:**

```ts
// src/app/drivers/magento-version.ts
export { provideDaffExternalRouterMagentoDriver } from '@daffodil/external-router/driver/magento/2.4.3';
export { DaffExternalRouterMagentoDriver } from '@daffodil/external-router/driver/magento/2.4.3';
```

```ts
// src/app/app.config.ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideDaffExternalRouterMagentoDriver(),
  ],
};
```
