# Shopify

The `@daffodil/external-router` Shopify driver provides URL resolution for Shopify-style routes, enabling your application to handle Shopify's standard URL patterns for products and other resources.

## Features

- **Product URL Resolution**: Automatically resolves `/products/{slug}` patterns
- **File Extension Handling**: Supports SEO-friendly URLs with extensions (e.g., `.html`)
- **Flexible Slug Formats**: Handles dashes, underscores, and alphanumeric slugs

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

## Supported URL Patterns

### Product Routes

The driver recognizes and resolves the following product URL patterns:

| Pattern                  | Example                     | Resolved Type |
| ------------------------ | --------------------------- | ------------- |
| `/products/{slug}`       | `/products/my-product`      | PRODUCT       |
| `products/{slug}`        | `products/my-product`       | PRODUCT       |
| `/products/{slug}.{ext}` | `/products/my-product.html` | PRODUCT       |

The driver extracts the product slug (without file extension) as the resource ID and returns a successful resolution (200 status) for matching patterns.

### Unsupported Routes

The following URL patterns are not currently supported and will return 404:

- Collection pages (`/collections/*`)
- Page routes (`/pages/*`)
- Blog routes (`/blogs/*`)
