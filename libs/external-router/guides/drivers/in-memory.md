# In-memory

This guide provides instructions on how to use the in-memory driver with `@daffodil/external-router`.

## Overview

The in-memory driver allows you to configure a custom `resolver` function that dynamically decides what kind of resolution to return for a route.

## Usage

```ts
import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { provideExternalRouter } from '@daffodil/external-router';
import { provideDaffExternalRouterInMemoryDriver } from '@daffodil/external-router/driver/in-memory';

let increment = 0;
export const myCustomResolver = (url: string) => ({
  id: increment++,
  url,
  code: 200,
  type: 'PRODUCT',
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideRouter(routes),
    provideExternalRouter(),
    provideDaffExternalRouterInMemoryDriver(),
  ],
};
```
