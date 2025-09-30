# In Memory

The `@daffodil/navigation` in-memory driver provides randomly generated menus for rendering navigational element trees. This driver is useful for development, testing, and prototyping when a backend navigation service is unavailable.

## Features

- Uses Angular's `angular-in-memory-web-api` under the hood
- Generates random data using `@daffodil/navigation/testing` factories
- Intended for development and testing only — use appropriate drivers for production environments
- Caches navigation trees in memory until page refresh
- Supports [custom seed data](/libs/navigation/guides/driver/in-memory.md#custom-seed-data) for persistent behavior

## Basic usage

The recommended approach for modern Angular applications is to use the standalone provider function:

```ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideDaffInMemoryDriver } from '@daffodil/driver/in-memory';
import { provideDaffNavigationInMemoryDriver } from '@daffodil/navigation/driver/in-memory';

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideHttpClient(),
		provideDaffInMemoryDriver(myConfig),
		provideDaffNavigationInMemoryDriver(),
	],
};
```

## Custom seed data

By default, the in-memory driver generates random navigation data using `DaffNavigationTreeFactory`. You can also provide your own custom navigation tree data:

```ts
import { ApplicationConfig } from '@angular/core';
import { provideDaffNavigationInMemorySeedDataProvider } from '@daffodil/navigation/driver/in-memory';
import { DaffNavigationTree } from '@daffodil/navigation';

const customNavigationTree: DaffNavigationTree = {
	id: 'root',
	url: '/',
	name: 'Main Navigation',
	breadcrumbs: [],
	children: [
		{
			id: 'products',
			url: '/products',
			name: 'Products',
			breadcrumbs: [{ id: 'root', name: 'Home', url: '/' }],
			children: [
				{
					id: 'category-1',
					url: '/products/category-1',
					name: 'Category 1',
					total_products: 25,
					breadcrumbs: [
						{ id: 'root', name: 'Home', url: '/' },
						{ id: 'products', name: 'Products', url: '/products' }
					],
					children: []
				},
				{
					id: 'category-2',
					url: '/products/category-2',
					name: 'Category 2',
					total_products: 15,
					breadcrumbs: [
						{ id: 'root', name: 'Home', url: '/' },
						{ id: 'products', name: 'Products', url: '/products' }
					],
					children: []
				}
			]
		},
		{
			id: 'about',
			url: '/about',
			name: 'About Us',
			breadcrumbs: [{ id: 'root', name: 'Home', url: '/' }],
			children: []
		}
	]
};

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideHttpClient(),
		provideDaffInMemoryDriver(myConfig),
		provideDaffNavigationInMemoryDriver(),
		provideDaffNavigationInMemorySeedDataProvider(() => customNavigationTree),
	],
};
```

## Common use cases

### Development environment

Use the in-memory driver to develop without a backend:

```ts
import { environment } from './environments/environment';

const providers = [
	provideRouter(routes),
	provideHttpClient(),
];

if (!environment.production) {
	providers.push(
		provideDaffInMemoryDriver(),
		provideDaffNavigationInMemoryDriver()
	);
} else {
	// Add production navigation driver
}

export const appConfig: ApplicationConfig = { providers };
```

