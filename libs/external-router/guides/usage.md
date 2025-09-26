# Usage

This guide walks you through setting up `@daffodil/external-router` to enable dynamic route resolution from external systems in your Angular application.

## Quick Start

### Installation

First, install the package:

```bash
npm install @daffodil/external-router --save
```

### Basic Setup

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

### Configure a Driver

Choose and configure a driver based on your needs. This example uses the testing driver for development, but you should use the driver which matches your platform requirements:

```ts
import { ApplicationConfig } from '@angular/core';
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

### Define Route Handlers

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
> - Order matters - more specific types should come first
> - Always include a fallback route at the end

### Step 5: Use in Templates

Navigate to external routes using standard Angular router directives:

```html
<!-- app.component.html -->
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

## Advanced Configuration

See the [configuration guide](/libs/external-router/guides/configuration.md) for all available options.

### Production Setup

For production environments, you'll typically use a driver that connects to your backend:

```ts
// Example with Magento
import { provideDaffMagentoExternalRouterDriver } from '@daffodil/external-router/driver/magento';

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideExternalRouter(),
		provideDaffMagentoExternalRouterDriver(),
	],
};
```

## Next Steps

- [Configure external router options](/libs/external-router/guides/configuration.md)
- [Create a custom driver](/libs/external-router/guides/drivers/custom.md)
- [Test your configuration](/libs/external-router/guides/testing.md)
