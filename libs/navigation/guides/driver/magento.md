# Magento

The `@daffodil/navigation` Magento driver connects your storefront's menus to your Magento store.

## Features

- **Caching**: Built-in caching capabilities for improved performance
- **Breadcrumb**: Generates breadcrumb navigation based on category hierarchy
- **Multi-level **: Supports nested categories with unlimited depth

## Usage

```ts
import { provideMagentoDriver } from '@daffodil/navigation/driver/magento';

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideMagentoDriver('https://some-magento-store.com/graphql'),
		provideDaffNavigationMagentoDriver(),
	],
};
```

## A note on performance

By default, the underlying driver will call [Magento's GraphQL API ](https://developer.adobe.com/commerce/webapi/graphql/schema/store/queries/store-config/) to retrieve the store's root category. You can skip this call by providing a `rootCategoryId` to the provider configuration:

```ts
import { provideMagentoDriver } from '@daffodil/navigation/driver/magento';

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideMagentoDriver('https://some-magento-store.com/graphql'),
		provideDaffNavigationMagentoDriver({
			rootCategoryId: 'Mg=='
		}),
	],
};
```
