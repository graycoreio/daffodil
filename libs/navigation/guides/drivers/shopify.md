# Shopify
The `@daffodil/navigation` Shopify driver connects your storefront's navigation menus to your Shopify store via the [Shopify Storefront API](https://shopify.dev/docs/api/storefront).

## Features
- **Collection-based navigation**: Builds navigation trees from Shopify collections
- **GraphQL integration**: Uses [Shopify Storefront API](https://shopify.dev/docs/api/storefront) for efficient data fetching

## Prerequisites
Before using the Shopify navigation driver, ensure you have:

- A Shopify store with Storefront API enabled
- A valid Storefront API access token
- Collections configured in your Shopify admin

## Usage
```ts
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideDaffShopifyDriver } from '@daffodil/driver/shopify';
import { provideDaffNavigationShopifyDriver } from '@daffodil/navigation/driver/shopify';

export const appConfig: ApplicationConfig = {
	providers: [
		provideHttpClient(),
		provideDaffShopifyDriver({
			domain: 'https://your-shopify-store.myshopify.com',
			accessToken: 'YOUR_STOREFRONT_ACCESS_TOKEN'
		}),
		provideDaffNavigationShopifyDriver(),
	],
};
```