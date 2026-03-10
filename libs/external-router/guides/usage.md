# Usage

This guide walks you through setting up `@daffodil/external-router` to enable dynamic route resolution from external systems in your Angular application.

## Quick start

### Installation
To install `@daffodil/external-router`, use the following commands in your terminal.

Install with npm:
```bash
npm install @daffodil/external-router --save
```

Install with yarn:

```bash
yarn add @daffodil/external-router
```

### Basic setup

Add `provideExternalRouter` to your application configuration:

```ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideExternalRouter } from '@daffodil/external-router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideRouter(routes),
    provideExternalRouter(),
  ],
};
```

### Configure a driver
Choose and configure a driver based on your needs. This example uses the testing driver for development, but use the driver that matches your platform:

```ts
import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { provideExternalRouter } from '@daffodil/external-router';
import { provideDaffExternalRouterTestingDriver } from '@daffodil/external-router/driver/testing';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideRouter(routes),
    provideExternalRouter(),
    provideDaffExternalRouterTestingDriver({
      'products/shirts': 'PRODUCT_CATEGORY',
      'products/pants': 'PRODUCT_CATEGORY',
      'about-us': 'CMS_PAGE',
      contact: 'CMS_PAGE',
    }),
  ],
};
```

### Define route handlers
Configure your Angular routes with `canMatch` to handle different external route types:

```ts
import { Routes } from '@angular/router';

import { daffExternalMatcherTypeGuard } from '@daffodil/external-router/routing';

export const routes: Routes = [
  // Static routes take precedence
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },

  // External routes handled by type
  {
    path: '**',
    component: ProductCategoryComponent,
    canMatch: [daffExternalMatcherTypeGuard('PRODUCT_CATEGORY')],
  },
  {
    path: '**',
    component: CmsPageComponent,
    canMatch: [daffExternalMatcherTypeGuard('CMS_PAGE')],
  },

  // Fallback for unresolved routes
  {
    path: '**',
    component: NotFoundComponent,
  },
];
```

> **Important:**
>
> - Static routes are evaluated first
> - External routes use `path: '**'` with `canMatch` guards
> - Order matters (more specific types should come first)
> - Always include a fallback route at the end

### Use in templates
Navigate to external routes using standard Angular router directives:

```html
<nav>
  <a routerLink="/">Home</a>
  <a routerLink="/products/shirts">Shirts</a>
  <a routerLink="/products/pants">Pants</a>
  <a routerLink="/about-us">About</a>
  <a routerLink="/contact">Contact</a>
  <a routerLink="/cart">Cart</a>
</nav>

<router-outlet></router-outlet>
```

```ts
// Or navigate programmatically
constructor(private router: Router) {}

navigateToProduct() {
  this.router.navigate(['/products/shirts']);
}
```

## Advanced configuration
See the [configuration guide](/libs/external-router/guides/configuration.md) for all available options.

### Production setup
For production environments, you'll typically use a driver that connects to your backend:

```ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideExternalRouter } from '@daffodil/external-router';
import { provideDaffExternalRouterMagentoDriver } from '@daffodil/external-router/driver/magento/2.4.3';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideExternalRouter(),
    provideDaffExternalRouterMagentoDriver(),
  ],
};
```

## Next steps
- [Configure external router options](/libs/external-router/guides/configuration.md)
- [Create a custom driver](/libs/external-router/guides/drivers/custom.md)
- [Test your configuration](/libs/external-router/guides/testing.md)
