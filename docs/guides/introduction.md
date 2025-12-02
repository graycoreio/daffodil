# What is Daffodil?
Daffodil is an Angular-based frontend framework that provides the driver architecture to build, scale, and switch backends for a faster and more adaptable ecommerce storefront.

## Why Daffodil?
Switch between ecommerce backends with minimal code changes. Daffodil's driver architecture abstracts platform differences, allowing you to swap ecommerce platforms by changing only a few lines of code. [View the demo](https://demo.daff.io).

For example, you could be on [Magento](https://business.adobe.com/products/commerce.html):

```ts
import { ApplicationConfig } from '@angular/core';
import { provideMagentoDriver } from '@daffodil/driver/magento';
import { provideDaffProductMagentoDriver } from '@daffodil/product/driver/magento';

export const appConfig: ApplicationConfig = {
  providers: [
    provideMagentoDriver(config),
    provideDaffProductMagentoDriver(),
  ],
};
```

And switch to [Shopify](https://www.shopify.com/) with just two lines of code:

```ts
import { ApplicationConfig } from '@angular/core';
import { provideShopifyDriver } from '@daffodil/driver/shopify';
import { provideDaffProductShopifyDriver } from '@daffodil/product/driver/shopify';

export const appConfig: ApplicationConfig = {
  providers: [
    provideShopifyDriver(config),
    provideDaffProductShopifyDriver(),
  ],
};
```

## Core features

### Driver system
[Drivers](/docs/guides/drivers.md) enable integration with any ecommerce backend through consistent interfaces. Drivers abstract platform-specific implementations, keeping application code platform-agnostic.

- Platform switching with minimal code changes
- Support for multiple backends simultaneously
- Mock drivers for development and testing
- Extensible architecture for custom integrations

```ts
constructor(
  @Inject(DaffProductDriver) private productDriver: DaffProductServiceInterface,
) {}

// Works with Magento, Shopify, or any custom implementation
this.productDriver.get(productId).subscribe(product => {
  // Handle product data consistently
});
```

### Design system
The [Design System](/docs/design) provides ecommerce-specific components tested for accessibility, responsive design, and conversion optimization.

### Modular packages
Daffodil uses [interoperable packages](/docs/packages) that work independently or together. Install only what you need:

- [@daffodil/product](/docs/packages/product)
- [@daffodil/cart](/docs/packages/cart)
- [@daffodil/auth](/docs/packages/auth)
- [@daffodil/customer](/docs/packages/customer)
- [@daffodil/order](/docs/packages/order)
- [And many more!](/docs/packages)

## Community and support
Daffodil is [MIT licensed](https://github.com/graycoreio/daffodil/blob/develop/LICENSE) and community-driven. Daffodil wouldn't be possible without our many open source contributions. All development happens in the open on GitHub, and contributions are welcomed from everyone.

- [Documentation](https://www.daff.io/docs): Guides and API references
- [GitHub Issues](https://github.com/graycoreio/daffodil/issues/new/choose): Bug reports and feature requests
- [Discord](https://discord.gg/BdaJVZ53sR): Community chat
- [Contributing](https://github.com/graycoreio/daffodil/blob/develop/CONTRIBUTING.md): Contribution guidelines

## Next steps
- [Getting Started](/docs/guides/getting-started.md)
- [Drivers](/docs/guides/essentials/drivers.md)
- [Packages](/docs/packages)