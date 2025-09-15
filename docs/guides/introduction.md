# What is Daffodil?

Daffodil is an Angular-based framework for building complex ecommerce storefronts that connect to any backend. It provides a complete architectural solution for headless ecommerce frontends that scales from startup MVPs to enterprise storefronts.

## Why Daffodil?

Switch between ecommerce backends with minimal code changes. Daffodil's driver architecture abstracts platform differences, allowing you to change entire (or partial) ecommerce features to another platform by changing only a few lines of code. [View the demo to see Daffodil in action](https://demo.daff.io)!

### Magento configuration

```ts
import { ApplicationConfig } from '@angular/core';
import { provideMagentoDriver } from '@daffodil/driver/magento';
import { provideDaffProductMagentoDriver } from '@daffodil/product/driver/magento';

export const appConfig: ApplicationConfig = {
  providers: [
    provideMagentoDriver(config),
    provideDaffProductMagentoDriver(),
  ]
};
```

### Shopify support

Shopify driver support is coming soon. Check our [GitHub](https://github.com/graycoreio/daffodil) for updates on availability.

## Core features

### Driver system
[Drivers](/docs/guides/drivers.md) enable integration with any ecommerce backend through consistent interfaces. Drivers abstract platform-specific implementations, keeping application code platform-agnostic.

**Key benefits:**
- Platform switching with minimal code changes
- Support multiple backends simultaneously
- Mock drivers for development and testing
- Extensible architecture for custom integrations

Example:

```ts
// Same service interface works with any platform
constructor(
  @Inject(DaffProductDriver) private productDriver: DaffProductServiceInterface
) {}

// Works with Magento, Shopify, or any custom implementation
this.productDriver.get(productId).subscribe(product => {
  // Handle product data consistently
});
```

### Design system
[Daffodil's Design System](/docs/design) provides ecommerce-specific components tested for accessibility, responsive design, and conversion optimization.

### Modular packages
Daffodil uses [interoperable packages](/docs/packages) that work independently or together. Install only what you need without package bloating:

- [@daffodil/product](/docs/packages/product)
- [@daffodil/cart](/docs/packages/cart)
- [@daffodil/auth](/docs/packages/auth)
- [@daffodil/customer](/docs/packages/customer)
- [@daffodil/orders](/docs/packages/order)
- [And many more!](/docs/packages)

## Community and support

### Open source

Daffodil is [MIT licensed](https://github.com/graycoreio/daffodil/blob/develop/LICENSE) and community-driven. Daffodil wouldn't be possible without our many open source contributions.

- **Transparent development**: All work happens in the open on GitHub
- **Community-driven roadmap**: Feature requests and feedback shape our roadmap
- **Open contributions**: Contributions are welcomed from everyone, regardless of skill level

### Getting help
- [Documentation](https://www.daff.io/docs): Guides and API references
- [GitHub issues](https://github.com/graycoreio/daffodil/issues/new/choose): Bug reports and feature requests
- [Discord](https://discord.gg/BdaJVZ53sR): Community chat with the core team and other developers

### Contributing

- [Code contributions](https://github.com/graycoreio/daffodil/blob/develop/CONTRIBUTING.md): See contributing guidelines
- [Documentation](https://github.com/graycoreio/daffodil/blob/develop/docs/guides/introduction.md): Improve guides and examples
- [Community support](https://discord.gg/BdaJVZ53sR): Help other developers
- [Feedback](https://github.com/graycoreio/daffodil/issues/new/choose): Share suggestions

## Next steps

- [Getting Started Guide](/docs/guides/getting-started.md)
- [Drivers](/docs/guides/drivers.md)
- [Packages](/docs/packages)