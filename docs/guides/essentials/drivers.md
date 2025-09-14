# Drivers

Drivers are the backbone of Daffodil's flexible architecture, acting as bridges between your Angular application and various ecommerce backends. They provide a consistent interface for interacting with different platforms while abstracting away platform-specific implementation details.

## What are Drivers?

Drivers implement standardized service interfaces that allow Daffodil to communicate with different ecommerce platforms in a unified way. Instead of writing platform-specific code throughout your application, you interact with drivers through consistent TypeScript interfaces. This promotes:

- **Platform flexibility**: Switch between backends without changing your application code
- **Development efficiency**: Mock backends for rapid prototyping and testing  
- **Maintainability**: Centralized platform-specific logic in dedicated driver packages
- **Scalability**: Support for multiple backends simultaneously through federated drivers

## Driver Architecture

### Service Interfaces

Each Daffodil feature domain (product, cart, auth, etc.) defines a service interface that drivers must implement. For example:

```typescript
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

:::info
Feature domains generally correspond to packages like `@daffodil/auth`, and `@daffodil/cart`.
:::

### Providers

Drivers are provided to your application using Angular providers:

```typescript
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

### Driver Implementations

Each package separately defines what drivers it currently has available. At the moment, we currently provide full coverage for the following platforms:

- [Adobe Commerce](https://business.adobe.com/products/commerce.html)/[Magento](https://magento-opensource.com/)/[MageOS](https://mage-os.org/)
- In-memory: Mock drivers with fake data for development and testing (great for preview environments!)
- Testing: Specialized drivers for unit and integration testing

We have partial support for:

- [**Shopify**](https://www.shopify.com/): GraphQl Storefront API drivers for Shopify backends

Native drivers maintained by the Daffodil team are included via subpackages of the relevant feature domain. For example, `@daffodil/product` contains:

- `@daffodil/product/driver/magento`
- `@daffodil/product/driver/in-memory`
- `@daffodil/product/driver/testing`
- `@daffodil/product/driver/shopify`


## Setting Up Drivers

### Basic Setup

1. **Install the driver package:**
```bash
npm install @daffodil/product --save
```

2. **Configure the driver providers in your app config:**
```typescript
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

3. **Inject and use the driver:**
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

## Best Practices

### Single Driver per Domain
Generally, you will only one driver per domain (product, cart, etc.) and typically the same platform is used across all domains to avoid conflicts and confusion. However, this is not mandatory, as is apparent in the [Daffodil driver switching demo](https://demo.daff.io). 

### Environment-Based Configuration
Use environment variables to configure different drivers for different environments:

```typescript
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

### Testing with Mock Drivers
Use testing drivers for unit tests:

```typescript
import { provideDaffProductTestingDriver } from '@daffodil/product/driver/testing';

beforeEach(() => {
	TestBed.configureTestingModule({
		providers: [
			provideDaffProductTestingDriver()
		]
	});
});
```


## Related Resources

- [Daffodil Demo](https://demo.daff.io) - See drivers in action
- [Product Driver Documentation](docs/packages/product/drivers)

## Contributing

We strongly encourage you contribute new drivers or improve existing ones. If there's a platform that you would like to see open an issue. If you are willing to contribute a driver see the [Contributing Guidelines](./CONTRIBUTING.md).