# Magento

The `@daffodil/navigation` Magento driver provides the connections between your storefront's menus and your underlying Magento store.

## Features

- **Caching Support**: Built-in caching capabilities for improved performance
- **Breadcrumb Support**: Generates breadcrumb navigation based on category hierarchy
- **Multi-level Navigation**: Supports nested category structures with unlimited depth

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

By default, the underlying driver will [call Magento's GraphQl API ](https://developer.adobe.com/commerce/webapi/graphql/schema/store/queries/store-config/) to retrieve the store's root category. However, you can skip this call by providing a `rootCategoryId` to the provider configuration:

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
