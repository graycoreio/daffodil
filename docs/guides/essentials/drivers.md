# Drivers

Drivers are the backbone of Daffodil's flexible architecture, acting as bridges between your Angular application and various ecommerce backends. They provide a consistent interface for interacting with different platforms while abstracting away platform-specific implementation details.

## Overview

Drivers implement standardized service interfaces that allow Daffodil to communicate with different ecommerce platforms in a unified way. Instead of writing platform-specific code throughout your application, you interact with drivers through consistent TypeScript interfaces. This promotes:

- **Platform flexibility**: Switch between backends without changing your application code
- **Development efficiency**: Mock backends for rapid prototyping and testing
- **Maintainability**: Centralized platform-specific logic in dedicated driver packages
- **Scalability**: Support for multiple backends simultaneously through federated drivers

[See drivers in action!](https://demo.daff.io)

## Driver architecture

### Service interfaces

Each feature domain (e.g. product, cart, auth) defines a service interface that drivers must implement:

```ts
// Product driver interface
export interface DaffProductServiceInterface<T extends DaffProduct = DaffProduct> {
  getAll(): Observable<T[]>;
  get(productId: T['id']): Observable<DaffProductDriverResponse<T>>;
  getByUrl(url: DaffProduct['url']): Observable<DaffProductDriverResponse<T>>;
}

// Cart driver interface
export interface DaffCartServiceInterface<T extends DaffCart = DaffCart> {
  get(id: T['id']): Observable<DaffDriverResponse<T>>;
  create(): Observable<{id: T['id']}>;
  clear(id: T['id']): Observable<Partial<T>>;
  merge(guestCart: T['id'], customerCart?: T['id']): Observable<DaffDriverResponse<T>>;
}
```

> Feature domains correspond to packages like `@daffodil/auth` and `@daffodil/cart`.

### Providers

Drivers are provided to your application using Angular providers:

```ts
import { ApplicationConfig } from '@angular/core';
import { provideMagentoDriver } from '@daffodil/driver/magento';
import { provideDaffProductMagentoDriver } from '@daffodil/product/driver/magento';

export const appConfig: ApplicationConfig = {
  providers: [
    provideMagentoDriver(),
    provideDaffProductMagentoDriver(),
  ]
};
```

They are then used in components or other services like:

```ts
import { Component, inject } from '@angular/core';
import { DaffProductDriver, DaffProductServiceInterface } from '@daffodil/product/driver';

export class ProductListComponent implements OnInit {
  private productDriver: DaffProductServiceInterface = inject(DaffProductDriver);
}
```

### Driver implementations

Each package separately defines what drivers it currently has available.

**Full support:**
- [Adobe Commerce](https://business.adobe.com/products/commerce.html) / [Magento](https://magento-opensource.com/) / [MageOS](https://mage-os.org/)
- In-memory: Mock drivers with fake data for development and testing
- Testing: Specialized drivers for unit and integration testing

**Partial support:**
- [**Shopify**](https://www.shopify.com/): GraphQL Storefront API drivers for Shopify backends

Drivers maintained by the Daffodil team are included as subpackages of feature domains. For example, `@daffodil/product` contains:
- `@daffodil/product/driver/magento`
- `@daffodil/product/driver/in-memory`
- `@daffodil/product/driver/shopify`


## Setting up drivers

1. Install the driver package

```bash
npm install @daffodil/product --save
```

2. Configure the driver providers in your app config:
```ts
import { ApplicationConfig } from '@angular/core';
import { provideMagentoDriver } from '@daffodil/driver/magento';
import { provideDaffProductMagentoDriver } from '@daffodil/product/driver/magento';

export const appConfig: ApplicationConfig = {
  providers: [
    provideMagentoDriver(),
    provideDaffProductMagentoDriver(),
  ]
};
```

3. Inject and use the driver:
```ts
import { DaffProductDriver, DaffProductServiceInterface } from '@daffodil/product';

@Component({...})
export class ProductComponent {
  constructor(
    @Inject(DaffProductDriver) private productDriver: DaffProductServiceInterface
  ) {}

  loadProduct(id: string) {
    return this.productDriver.get(id);
  }
}
```

## Supported platform versions

Unless otherwise stated, Daffodil supports the platform versions each platform maintains under standard support.

- [Magento](https://magento.watch/versions#magento-community)

## Versioned drivers

Drivers talk to platforms through their APIs, and those APIs change over time. A single version of Daffodil may therefore ship several drivers for the same feature for the same platform, each one targeting a different range of platform versions. Versioned drivers live in subpackages named after the earliest platform version they support:

```bash
@daffodil/customer-order/driver/magento/2.4.5
@daffodil/customer-order/driver/magento/2.4.6
```

Any given driver version supports its own platform version and every later version, up to the next driver version. In the example above, `2.4.5` covers Magento `2.4.5` up to (but not including) `2.4.6`, and `2.4.6` covers Magento `2.4.6` and everything after it.

Not every package needs a new driver for every platform release, so the set of driver versions is different from package to package. A package with only one driver doesn't use a version subpackage at all.

### Pinning a driver version

You can import a specific driver version directly:

```ts
import { provideDaffCustomerOrderMagentoDriver } from '@daffodil/customer-order/driver/magento/2.4.6';
```

This works, but it makes upgrades your responsibility. Say your Magento store moves from `2.4.7-p10` to `2.4.7-p11` and that release breaks an API Daffodil uses. Before you upgrade, you would need to work out:

1. Which Daffodil packages have a driver that targets the new platform version.
2. Which version subpackage each of those imports should now point to.

Updating the imports is just a find and replace. Working out which imports to change means checking every driver package you use, every time you upgrade the platform.

### Automatically versioned drivers

Auto versioned drivers handle this for you. You tell Daffodil which platform version your app targets, and at build time we pick the matching driver version for every package.

Import from the `auto` subpackage instead of a specific version:

```ts
import { provideDaffCustomerOrderMagentoDriver } from '@daffodil/customer-order/driver/magento/auto';
```

Daffodil looks at the driver versions in your installed packages, chooses one per package for your platform version, and passes the matching conditions to the Angular application builder. The bundler then resolves each `auto` import to that driver version. Only the selected versions end up in your bundle.

#### How a version is selected

For each package, Daffodil picks:

1. The driver version that exactly matches your platform version, if there is one.
2. Otherwise, the closest driver version that is older than your platform version.

If every driver version in a package is newer than your platform version, the build logs a warning and adds no condition for that package.

For example, if a package ships `2.4.5` and `2.4.6` drivers:

| Platform version | Selected driver |
| ---------------- | --------------- |
| `2.4.5`          | `2.4.5`         |
| `2.4.5-p3`       | `2.4.5`         |
| `2.4.7-p11`      | `2.4.6`         |
| `2.4.4`          | none (warning)  |

#### Application builder

Daffodil performs this automatic selection via the `@daffodil/commerce:application` builder. It wraps `@angular/build:application`, takes all of its options, and adds a `drivers` option for your platform versions:

```json
{
	"architect": {
		"build": {
			"builder": "@daffodil/commerce:application",
			"options": {
				"drivers": {
					"magento": "2.4.7-p11"
				}
			}
		}
	}
}
```

The builder works out the driver conditions on every build and merges them with any `conditions` you have already configured. When you upgrade your platform, the only change you need to make is the version in `drivers` in your `angular.json` for the Angular CLI or `project.json` for Nx.

#### Sync builder

If you can't replace your build target's builder (for example, because you use a custom builder), use `@daffodil/commerce:sync` instead. It writes the computed conditions directly into the `conditions` option of that application's `build` target, in `angular.json` or in Nx `project.json` files:

```json
{
	"architect": {
		"sync-drivers": {
			"builder": "@daffodil/commerce:sync",
			"options": {
				"drivers": {
					"magento": "2.4.7-p11"
				}
			}
		},
		"build": {
			"builder": "@angular/build:application",
			"options": {
				"conditions": ["customer-order-magento-2.4.6"]  <-- Autogenerated by the builder
			}
		}
	}
}
```

The sync builder replaces the existing `conditions` of the build target. You need to run it again each time you change your platform version or upgrade Daffodil:

```bash
ng run my-app:sync-drivers
```

### Custom drivers

Driver packages outside of Daffodil, whether your own or from a third party, can use auto versioning too. The package needs to:

1. Put each driver version in its own entrypoint, e.g. `@myorg/mypackage/driver/magento/2.4.6`.
2. Add a `driver/<platform>/auto` entrypoint. This is the import path your app uses.
3. In its `package.json`, add an `exports` entry for `./driver/<platform>/auto` with one condition per driver version, named `<package>-<platform>-<version>`.

Then, in your application, add the package path to the builder's `packages` option. Daffodil's own packages are always included, so you only need to list your own and third-party packages:

```json
{
	"builder": "@daffodil/commerce:application",
	"options": {
		"drivers": {
			"magento": "2.4.7-p11"
		},
		"packages": [
      "node_modules/@myorg/mypackage"
    ]
	}
}
```

> **Security warning:** Only list specific packages that you trust in `packages`. Never use a broad glob such as `**` or `@*/**` that covers all of `node_modules`. Every package that matches can add build conditions, and those conditions change which files the bundler resolves for imports across your whole application. A broad glob lets any installed dependency, including transitive dependencies you have never reviewed, decide what code ends up in your production bundle.

## Best practices

### Single driver per domain

Generally, you will only use one driver per domain (e.g. product, cart, etc.). Typically the same platform is used across all domains to avoid conflicts. However, this is not mandatory. See the [driver switching demo](https://demo.daff.io) for multi-platform examples.

### Environment-based configuration

Use environment variables to configure different drivers for different environments:

```ts
import { ApplicationConfig, EnvironmentProviders } from '@angular/core';
import { environment } from '../environments/environment';
import { provideDaffProductMagentoDriver } from '@daffodil/product/driver/magento';
import { provideDaffProductInMemoryDriver } from '@daffodil/product/driver/in-memory';

const driverProviders: EnvironmentProviders[] = environment.production ? provideDaffProductMagentoDriver() : provideDaffProductInMemoryDriver();

export const appConfig: ApplicationConfig = {
	providers: [
		...driverProviders,
		// other providers
	],
};
```

### Testing with mock drivers

Support for testing with mock drivers is coming soon. Check our [GitHub](https://github.com/graycoreio/daffodil) for updates on availability.

## Contributing

We strongly encourage you to contribute new drivers or improve existing ones. If there's a platform that you would like to see supported, please [open an issue](https://github.com/graycoreio/daffodil/issues/new/choose). If you are willing to contribute a driver, see the [contributing guidelines](https://github.com/graycoreio/daffodil/blob/develop/CONTRIBUTING.md).
