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

const driverProviders: EnvironmentProviders[] = environment.production
  ? provideDaffProductMagentoDriver()
  : provideDaffProductInMemoryDriver();

export const appConfig: ApplicationConfig = {
  providers: [
    ...driverProviders,
    // other providers
  ]
};
```

### Testing with mock drivers

Support for testing with mock drivers is coming soon. Check our [GitHub](https://github.com/graycoreio/daffodil) for updates on availability.

## Contributing

We strongly encourage you to contribute new drivers or improve existing ones. If there's a platform that you would like to see supported, please [open an issue](https://github.com/graycoreio/daffodil/issues/new/choose). If you are willing to contribute a driver, see the [contributing guidelines](https://github.com/graycoreio/daffodil/blob/develop/CONTRIBUTING.md).
