# In-Memory

This guide provides instructions on how to use the `DaffExternalRouterInMemoryDriver` with `@daffodil/external-router`.

## Purpose

The in-memory driver allows you to configure a custom `resolver` function that you can configure to dynamically decide what kind of resolution you wish to return for a route.

## Usage

You use can configure the external router to use the In-memory driver like:

```ts
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
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
  provideRouter(routes),
  provideClientHydration(),
  provideExternalRouter(),
  provideDaffExternalRouterInMemoryDriver(),
 ],
};
```
