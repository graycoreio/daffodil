# Shopify

The `@daffodil/external-router` Shopify driver provides URL resolution for Shopify routes, enabling your application to handle Shopify's URL patterns for products and other resources.

## Features

- **Product URL resolution**: Automatically resolves `/products/{slug}` patterns
- **File extension handling**: Supports SEO-friendly URLs with extensions (e.g., `.html`)
- **Flexible slug formats**: Handles dashes, underscores, and alphanumeric characters

## Usage

```ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideExternalRouter } from '@daffodil/external-router';
import { provideDaffExternalRouterShopifyDriver } from '@daffodil/external-router/driver/shopify';

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideClientHydration(),
		provideExternalRouter(),
		provideDaffExternalRouterShopifyDriver(),
	],
};
```

## Supported URL patterns

### Product routes

The driver recognizes and resolves the following product URL patterns:

| Pattern                  | Example                     | Resolved Type |
| ------------------------ | --------------------------- | ------------- |
| `/products/{slug}`       | `/products/my-product`      | PRODUCT       |
| `products/{slug}`        | `products/my-product`       | PRODUCT       |
| `/products/{slug}.{ext}` | `/products/my-product.html` | PRODUCT       |

The driver extracts the product slug (without file extension) as the resource ID and returns a successful resolution (200 status) for matching patterns.

### Unsupported routes

The following URL patterns are not currently supported and will return 404:

- Collection pages (`/collections/*`)
- Page routes (`/pages/*`)
- Blog routes (`/blogs/*`)
