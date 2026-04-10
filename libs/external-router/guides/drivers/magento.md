# Magento

This guide provides instructions on how to use the Magento driver with `@daffodil/external-router`.

## Installation

```bash
npm install @daffodil/external-router --save
```

## Getting started

To use the Magento drivers, you need to import and configure the appropriate modules and services in your Angular application, and set your Magento version in `angular.json`.

Magento's GraphQl API has changed with its various versions, with the most recent versions of Magento supporting the `routes` GraphQl query.

As such, most recent versions of Magento should use the driver version which first introduced support for this: `v2.4.3`

The driver version is selected at build time via Angular CLI's `conditions` — only the selected version's code is included in the bundle.

| Magento Version | `conditions` value | SEO Data Support |
| --------------- | ------------------------ | ---------------- |
| v2.4.1          | `magento-2.4.1`          | No               |
| v2.4.2          | `magento-2.4.2`          | No               |
| v2.4.3+         | `magento-2.4.3`          | Yes              |

If `customConditions` is not set, the driver defaults to v2.4.3.

## Usage

### Step 1 — Set your Magento version in `angular.json` and `tsconfig.json`

Set these once. Only change them when you upgrade your Magento version.

```jsonc
// angular.json
{
  "projects": {
    "my-app": {
      "architect": {
        "build": {
          "configurations": {
            "production": {
              "conditions": ["magento-2.4.3"]
            }
          }
        }
      }
    }
  }
}
```

```jsonc
// tsconfig.json (or your app-specific tsconfig)
{
  "compilerOptions": {
    "customConditions": ["magento-2.4.3"]
  }
}
```

### Step 2 — Configure the provider in `app.config.ts`

This import never changes, regardless of which Magento version you use.

```ts
import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { provideExternalRouter } from '@daffodil/external-router';
import { provideDaffExternalRouterMagentoDriver } from '@daffodil/external-router/driver/magento';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideExternalRouter(),
    provideDaffExternalRouterMagentoDriver(),
  ],
};
```

When you upgrade Magento, only `angular.json` and `tsconfig.json` need to change — `app.config.ts` stays the same.

## Tree-shaking

The `customConditions` approach means the bundler resolves `@daffodil/external-router/driver/magento` to exactly one version bundle. The other version bundles are never imported and are not included in the final output.

## Alternative: version-specific sub-package import

If you are not using Angular CLI (esbuild), you can import `provideDaffExternalRouterMagentoDriver` and `DaffExternalRouterMagentoDriver` directly from the version-specific sub-package. This also guarantees tree-shaking:

```ts
import { provideDaffExternalRouterMagentoDriver } from '@daffodil/external-router/driver/magento/2.4.3';
```

| Magento Version | Package                                          | SEO Data Support |
| --------------- | ------------------------------------------------ | ---------------- |
| v2.4.1          | `@daffodil/external-router/driver/magento/2.4.1` | No               |
| v2.4.2          | `@daffodil/external-router/driver/magento/2.4.2` | No               |
| v2.4.3+         | `@daffodil/external-router/driver/magento/2.4.3` | Yes              |
