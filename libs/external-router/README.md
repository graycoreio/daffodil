# @daffodil/external-router

`@daffodil/external-router` extends `@angular/router` and allows you to render routes defined in external systems like Wordpress, Magento, Contentful, etc, as if you had defined the routes statically in your Angular `Routes`. This is useful when generating user-friendly routes in external applications and resolving them by their user-friendly URI, such as `/sweatshirts` instead of `/category/6` or `category/sweatshirts.`

<!-- omit in toc -->

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Drivers](#drivers)
- [Configuration](/libs/external-router/guides/configuration.md)
- [Testing](/libs/external-router/guides/testing.md)

## Installation

To install `@daffodil/external-router`, use the following commands in your terminal.

Install with npm:

```bash
npm install @daffodil/external-router --save
```

Install with yarn:

```bash
yarn add @daffodil/external-router
```

## Usage

To get started with `@daffodil/external-router`, follow these steps:

1. Add `provideExternalRouter` to the `providers` of your `appConfig` or `AppModule` :

```ts
import { ApplicationConfig } from '@angular/core';
...
import { provideExternalRouter } from '@daffodil/external-router';

export const appConfig: ApplicationConfig = {
 providers: [
  provideRouter(routes),
  provideClientHydration(),
  provideExternalRouter(),
 ],
};
```

2. Configure your [driver of choice](#drivers) (this example uses the [testing driver](/libs/external-router/guides/driver/testing)):

```ts
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { DaffExternalRouterDriverTestingModule } from '@daffodil/external-router/driver/testing';

export const appConfig: ApplicationConfig = {
 providers: [
  provideRouter(routes),
  provideClientHydration(),
  provideExternalRouter(),
  provideDaffExternalRouterTestingDriver({
    'test-page': 'TEST_TYPE',
    'other-page': 'OTHER_TYPE',
    'another-page': 'OTHER_TYPE',
  }),
 ],
};
```

3. Configure your routes to use the `daffExternalMatcherTypeGuard`

```ts
import { Routes } from '@angular/router';

import { daffExternalMatcherTypeGuard } from '@daffodil/external-router/routing';

export const routes: Routes = [
 {
  path: '',
  pathMatch: 'full',
  component: HomeComponent,
 },
 {
  path: '**',
  component: TestComponent,
  canMatch: [daffExternalMatcherTypeGuard('TEST_TYPE')],
 },
 {
  path: '**',
  component: OtherTypeComponent,
  canMatch: [daffExternalMatcherTypeGuard('OTHER_TYPE')],
 },
];
```

> You can use whatever type values you would like, just ensure they match the types set in `provideDaffExternalRouterTestingDriver`.
> These components are also just examples, you can replace them with whatever components you want.

4. Add links to your AppComponent:

```ts
@Component({
 selector: 'app-root',
 standalone: true,
 imports: [RouterOutlet, RouterLink],
 templateUrl: './app.component.html',
 styleUrl: './app.component.scss',
})
export class AppComponent {}
```

```html
<ul>
 <li><a routerLink="/">Home</a></li>
 <li><a routerLink="/test-page">Test</a></li>
 <li><a routerLink="/other-page">Other Type</a></li>
  <li><a routerLink="/another-page">Other Type (another)</a></li>
</ul>
<router-outlet></router-outlet>
```

5. Serve your app.

You can now navigate to "/test-page", "/other-page", and "/another-page"  as if it was defined in your Angular routes.

## Drivers

We provide a driver interface along with a few pre-fabricated drivers for you to simply drop into your app and get started with external route resolution.

- [Testing](/libs/external-router/guides/driver/testing)
- [In-Memory](/libs/external-router/guides/driver/in-memory)
- [Magento](/libs/external-router/guides/driver/magento)
- [BYOD (Bring Your Own Driver)](/libs/external-router/guides/driver/custom)
