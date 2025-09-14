# What is Daffodil?

Daffodil is a framework built on Angular that allows you to build complex Ecommerce store frontends and connect to any backend. More than just a UI library, Daffodil provides a complete architectural solution for the frontend of headless ecommerce that scales from startup MVPs to enterprise-level storefronts handling millions of transactions.

[**Want to get started?**](/docs/guides/getting-started)

## Why Choose Daffodil?

Imagine if you could swap your storefront from Magento to Shopify, or Shopify to Magento, or Medusa to Magento, or Salesforce to Medusa, or FakeAPI to Magento in a single line of code?

**Stop imagining:** [Interactive driver swapping demo](https://demo.daff.io)

Daffodil enables you to swap entire (or partial) ecommerce features to another platform simply by changing a few lines of code:

For example, you could be on [Magento](https://business.adobe.com/products/commerce.html):

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

and switch over to [Shopify](https://www.shopify.com/) with just two lines of code:

```ts
import { ApplicationConfig } from '@angular/core';
import { provideMagentoDriver } from '@daffodil/driver/magento';
import { provideDaffProductMagentoDriver } from '@daffodil/product/driver/shopify';

export const appConfig: ApplicationConfig = {
	providers: [
		provideShopifyDriver(config),
		provideDaffProductShopifyDriver(),
	]
};
```


## Core Features

Daffodil is built with flexibility and scalability in mind. Here are the key features that make it special:

### The Driver System
[Drivers](/docs/guides/drivers.md) are Daffodil's lifeblood - they enable integration with any ecommerce backend through a consistent interface. Whether you're using Magento, Shopify, or a custom API, drivers abstract away platform differences so your application code stays the same.

**Key benefits:**
- Switch between platforms with minimal code changes
- Support multiple backends simultaneously
- Mock drivers for development and testing
- Extensible architecture for custom integrations

For many use-cases, interacting with an arbitrary ecommerce platform looks something like:

```typescript
// Same service interface works with any platform
constructor(
  @Inject(DaffProductDriver) private productDriver: DaffProductServiceInterface
) {}

// Works with Magento, Shopify, or any custom implementation
this.productDriver.get(productId).subscribe(product => {
  // Handle product data consistently
});
```

### The Design System
Building trust is crucial in ecommerce. [Daffodil's Design Library](/docs/design) provides a comprehensive component library built specifically for ecommerce experiences. Every component is tested for accessibility, responsive design, and conversion optimization.

### Modular Package System
Daffodil's architecture is based on [interoperable packages](/docs/packages) that work either independently or together. Pick exactly the features you need (no package bloat):


- [@daffodil/product](/docs/packages/product)
- [@daffodil/cart](/docs/packages/cart)
- [@daffodil/auth](/docs/packages/auth)
- [@daffodil/customer](/docs/packages/customer)
- [@daffodil/orders](/docs/packages/order)

[And many more!](/docs/packages)

## Community & Support

### Open Source & Community Driven

Daffodil is [MIT licensed](https://github.com/graycoreio/daffodil/blob/develop/LICENSE) and community focused. Daffodil wouldn't be possible without our many open source contributions.

We believe in:

- **Transparency**: All development happens in the open on GitHub
- **Community input**: Feature requests and feedback drive our roadmap  
- **Collaborative development**: Contributions welcome from everyone, regardless of skill level

### Getting Help
- [**Documentation**](https://www.daff.io/docs/guides/introduction): Comprehensive guides and API references
- [**GitHub Issues**](https://github.com/graycoreio/daffodil/issues/new/choose): Bug reports and feature requests
- [**Discord Community**](https://discord.gg/BdaJVZ53sR): Real-time chat with the core team and other developers

### Contributing
Whether you're fixing bugs, adding features, or improving documentation, contributions are welcomed:

- [**Code contributions**](https://github.com/graycoreio/daffodil/blob/develop/CONTRIBUTING.md): Follow our contributing guidelines for PRs, we welcome everyone.
- [**Documentation**](https://github.com/graycoreio/daffodil/blob/develop/docs/guides/introduction.md): Help improve guides and examples
- [**Community support**](https://discord.gg/BdaJVZ53sR): Answer questions and help other developers
- [**Feedback**](https://github.com/graycoreio/daffodil/issues/new/choose): Share your experiences and suggestions for improvements

### Pick Your Learning Path

- [Get Started](/docs/guides/getting-started.md)