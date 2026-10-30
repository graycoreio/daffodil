# @daffodil/seo
`@daffodil/seo` provides services for managing SEO data on a page, such as canonical URLs, tab titles, and meta tags.

## Overview
In addition to the services, `@daffodil/seo/state` includes effects that automatically manage adding and removing SEO data as users navigate through the app.

## Installation
To install `@daffodil/seo`, use the following commands in your terminal.

Install with npm:
```
npm install @daffodil/seo --save
```

Install with yarn:
```
yarn add @daffodil/seo
```

## Providing SEO state

Register the state provider alongside the NgRx root providers to automatically
manage page titles, meta tags, and canonical URLs:

```ts
import { ApplicationConfig } from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideDaffSeoState } from '@daffodil/seo/state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(),
    provideEffects(),
    provideDaffSeoState(),
  ],
};
```

`DaffSeoStateModule` remains available for NgModule-based applications, but is
deprecated in favor of `provideDaffSeoState`.
