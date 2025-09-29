# Shopify

The `@daffodil/navigation` Shopify driver provides the connections between your storefront's navigation menus and your underlying Shopify store, using the Shopify Storefront API to retrieve collection-based navigation structures.

## Features

- **Collection-based Navigation**: Builds navigation trees from Shopify collections
- **GraphQL Integration**: Uses Shopify's Storefront API for efficient data fetching

## Prerequisites

Before using the Shopify navigation driver, ensure you have:

1. A Shopify store with the Storefront API enabled
2. A valid Storefront API access token
3. Collections configured in your Shopify admin

## Usage

```ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideDaffShopifyDriver } from '@daffodil/driver/shopify';
import { provideDaffNavigationShopifyDriver } from '@daffodil/navigation/driver/shopify';

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideHttpClient(),
		provideDaffShopifyDriver({
			domain: 'https://your-shopify-store.myshopify.com',
			accessToken: 'YOUR_STOREFRONT_ACCESS_TOKEN'
		}),
		provideDaffNavigationShopifyDriver(),
	],
};
```