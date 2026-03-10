# In Memory
The `@daffodil/navigation` in-memory driver provides randomly generated menus for local development and testing when a backend is unavailable.

## Features
- Uses Angular's `angular-in-memory-web-api` under the hood
- Generates random data using `@daffodil/navigation/testing` factories
- Intended for development and testing only — use appropriate drivers for production environments
- Caches navigation trees in memory until page refresh
- Supports [custom seed data](/libs/navigation/guides/drivers/in-memory.md#custom-seed-data) for persistent behavior

## Usage
```ts
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideDaffInMemoryDriver } from '@daffodil/driver/in-memory';
import { provideDaffNavigationInMemoryDriver } from '@daffodil/navigation/driver/in-memory';

export const appConfig: ApplicationConfig = {
	providers: [
		provideHttpClient(),
		provideDaffInMemoryDriver(myConfig),
		provideDaffNavigationInMemoryDriver(),
	],
};
```

## Custom seed data
By default, the driver generates random data using `DaffNavigationTreeFactory`. To provide your own:

```ts
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
      breadcrumbs: [{ id: 'root', name: 'Home', url: '/', level: 0 }],
      children: [
        {
          id: 'category-1',
          url: '/products/category-1',
          name: 'Category 1',
          total_products: 25,
          breadcrumbs: [
            { id: 'root', name: 'Home', url: '/', level: 0 },
            { id: 'products', name: 'Products', url: '/products', level: 1 },
          ],
          children: [],
        },
        {
          id: 'category-2',
          url: '/products/category-2',
          name: 'Category 2',
          total_products: 15,
          breadcrumbs: [
            { id: 'root', name: 'Home', url: '/', level: 0 },
            { id: 'products', name: 'Products', url: '/products', level: 1 },
          ],
          children: [],
        },
      ],
    },
    {
      id: 'about',
      url: '/about',
      name: 'About Us',
      breadcrumbs: [{ id: 'root', name: 'Home', url: '/', level: 0 }],
      children: [],
    },
  ],
};
```

Then add it to your `appConfig` providers alongside `provideDaffNavigationInMemoryDriver()`:

```ts
provideDaffNavigationInMemorySeedDataProvider(() => customNavigationTree)
```
