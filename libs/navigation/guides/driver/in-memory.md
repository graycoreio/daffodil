# In Memory

The `@daffodil/navigation` In-Memory driver provides randomly generated menus that your application can use as necessary to render trees of navigational elements. This driver is particularly useful for development, testing, and prototyping scenarios where you don't have a backend navigation service available.

## Features

- The in-memory driver uses Angular's `angular-in-memory-web-api` under the hood
- Random data is generated using the `@daffodil/navigation/testing` factories
- The driver is intended for development and testing only - use appropriate production drivers for production environments
- Navigation trees are cached in memory and persist until refresh.
- [Custom Seed Data](#custom-seed-data) can be provided for more persistent behavior.

## Basic Usage

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

## Custom Seed Data

By default, the in-memory driver generates random navigation data using the `DaffNavigationTreeFactory`. However, you can provide your own custom navigation tree data:

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

## Common Use Cases

### Development Environment

Use the in-memory driver during development to work without a backend:

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

