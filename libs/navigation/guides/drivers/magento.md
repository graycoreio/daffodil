# Magento
The `@daffodil/navigation` Magento driver connects your storefront's menus to your Magento store.

## Features
- **Caching**: Built-in caching capabilities for improved performance
- **Breadcrumb**: Generates breadcrumb navigation based on category hierarchy
- **Multi-level**: Supports nested categories with unlimited depth

## Usage
```ts
import { ApplicationConfig } from '@angular/core';
import { provideMagentoDriver } from '@daffodil/driver/magento';
import { provideDaffNavigationMagentoDriver } from '@daffodil/navigation/driver/magento';

export const appConfig: ApplicationConfig = {
  providers: [
    provideMagentoDriver('https://some-magento-store.com/graphql'),
    provideDaffNavigationMagentoDriver(),
  ],
};
```

## Performance
By default, the driver calls [Magento's GraphQL API](https://developer.adobe.com/commerce/webapi/graphql/schema/store/queries/store-config/) to retrieve the store's root category. You can skip this call by providing a `rootCategoryId`:

```ts
provideDaffNavigationMagentoDriver({ rootCategoryId: 'Mg==' })
```
