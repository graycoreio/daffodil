# Usage

## Getting started
Add `provideExternalRouter` to the `providers` of your `appConfig` or `AppModule`.

```ts
import { ApplicationConfig } from '@angular/core';
import { provideExternalRouter } from '@daffodil/external-router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideExternalRouter(),
  ],
};
```

## Configurations

1. Configure your [driver of choice](/libs/external-router/README.md#drivers). This example uses the [testing driver](/libs/external-router/guides/driver/testing.md):

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

2. Configure your routes to use the `daffExternalMatcherTypeGuard`:

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

> These components are also just examples, so you can replace them with whatever components you want.

3. Add links to your `AppComponent`:

```ts
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
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

4. Serve your app. You can now navigate to `"/test-page"`, `"/other-page"`, and `"/another-page"` as if it was defined in your Angular routes.
